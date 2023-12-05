@testset "Projections" begin
  @testset "Make sure that projection onto simplex works correctly" begin
    @test begin
      x = [1.0, 1.0]
      TulipaClustering.project_onto_simplex(x) ≈ [0.5, 0.5]
    end

    @test begin
      x = [3.0]
      TulipaClustering.project_onto_simplex(x) == [1.0]
    end

    @test begin
      x = [-2.0, 1.0]
      TulipaClustering.project_onto_simplex(x) ≈ [0.0, 1.0]
    end
  end
end

@testset "Subgradient descent" begin
  @testset "Make sure that subgradient descent can hit the maximum number of iterations" begin
    x = [100.0, 10.0]
    subgradient = (x) -> x
    projection = TulipaClustering.project_onto_simplex
    TulipaClustering.projected_subgradient_descent!(
      x;
      subgradient,
      projection,
      niters = 2,
      tol = 1e-3,
      learning_rate = 100.0,
      adaptive_grad = false,
    ) ≈ [1.0, 0.0]
  end
end

@testset "Weight fitting" begin
  @testset "Make sure that weight fitting works correctly for convex weights" begin
    @test begin
      dir = joinpath(INPUT_FOLDER, "EU")
      clustering_data = TulipaClustering.read_clustering_data_from_csv_folder(dir)
      split_into_periods!(clustering_data; period_duration = 24 * 7)
      clustering_result = find_representative_periods(
        clustering_data,
        10;
        rescale_demand_data = true,
        drop_incomplete_last_period = false,
        method = :k_means,
        distance = SqEuclidean(),
        init = :kmcen,
      )
      TulipaClustering.fit_rep_period_weights!(clustering_result; weight_type = :convex, niters = 5)
      sum(clustering_result.weight_matrix) ≈ 365 / 7 &&
        all(sum(clustering_result.weight_matrix[1:(end - 1), :], dims = 2) .≈ 1.0)
    end
  end

  @testset "Make sure that weight fitting works correctly for bounded conical weights" begin
    @test begin
      dir = joinpath(INPUT_FOLDER, "EU")
      clustering_data = TulipaClustering.read_clustering_data_from_csv_folder(dir)
      split_into_periods!(clustering_data; period_duration = 24 * 7)
      clustering_result = find_representative_periods(
        clustering_data,
        10;
        rescale_demand_data = true,
        drop_incomplete_last_period = false,
        method = :k_means,
        distance = SqEuclidean(),
        init = :kmcen,
      )
      TulipaClustering.fit_rep_period_weights!(
        clustering_result;
        weight_type = :conical_bounded,
        niters = 5,
      )
      all(sum(clustering_result.weight_matrix[1:(end - 1), :], dims = 2) .≤ 1.0)
    end
  end

  @testset "Make sure that weight fitting works correctly for conical weights" begin
    @test begin
      dir = joinpath(INPUT_FOLDER, "EU")
      clustering_data = TulipaClustering.read_clustering_data_from_csv_folder(dir)
      split_into_periods!(clustering_data; period_duration = 24 * 7)
      clustering_result = find_representative_periods(
        clustering_data,
        10;
        rescale_demand_data = true,
        drop_incomplete_last_period = false,
        method = :k_means,
        distance = SqEuclidean(),
        init = :kmcen,
      )
      TulipaClustering.fit_rep_period_weights!(
        clustering_result;
        weight_type = :conical,
        niters = 5,
      )
      all(sum(clustering_result.weight_matrix[1:(end - 1), :], dims = 2) .≥ 0.0)
    end
  end

  @testset "Make sure that weight fitting works correctly for conical weights" begin
    @test_throws ArgumentError begin
      dummy_matrix = [1.0 1.0; 1.0 1.0]
      TulipaClustering.fit_rep_period_weights!(
        dummy_matrix,
        dummy_matrix,
        dummy_matrix;
        weight_type = :bad,
      )
    end
  end
end
