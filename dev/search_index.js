var documenterSearchIndex = {"docs":
[{"location":"contributing/#Contributing-guidelines","page":"Contributing","title":"Contributing guidelines","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"First of all, thanks for the interest!","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"We welcome all kinds of contribution, including, but not limited to code, documentation, examples, configuration, issue creating, etc.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Be polite and respectful.","category":"page"},{"location":"contributing/#Bug-reports-and-discussions","page":"Contributing","title":"Bug reports and discussions","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you think you found a bug, feel free to open an issue. Focused suggestions and requests can also be opened as issues. Before opening a pull request, start an issue or a discussion on the topic, please.","category":"page"},{"location":"contributing/#Working-on-an-issue","page":"Contributing","title":"Working on an issue","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If you found an issue that interests you, comment on that issue what your plans are. If the solution to the issue is clear, you can immediately create a pull request (see below). Otherwise, say what your proposed solution is and wait for a discussion around it.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"TipFeel free to ping us after a few days if there are no responses.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"If your solution involves code (or something that requires running the package locally), check the developer documentation. Otherwise, you can use the GitHub interface directly to create your pull request.","category":"page"},{"location":"developer/#Developer-documentation","page":"Dev setup","title":"Developer documentation","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"If you haven't, please read the Contributing guidelines first.","category":"page"},{"location":"developer/#Linting-and-formatting","page":"Dev setup","title":"Linting and formatting","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Install a plugin on your editor to use EditorConfig. This will ensure that your editor is configured with important formatting settings.","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"We use https://pre-commit.com to run the linters and formatters. In particular, the Julia code is formatted using JuliaFormatter.jl, so please install it globally first.","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"To install pre-commit, we recommend using pipx as follows:","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"# Install pipx following the link\npipx install pre-commit","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"With pre-commit installed, activate it as a pre-commit hook:","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"pre-commit install","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"To run the linting and formatting manually, enter the command below:","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"pre-commit run -a","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Now, you can only commit if all the pre-commit tests pass.","category":"page"},{"location":"developer/#First-time-clone","page":"Dev setup","title":"First time clone","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"If this is the first time you work with this repository, follow the instructions below to clone the repository.","category":"page"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Fork this repo\nClone your repo (this will create a git remote called origin)\nAdd this repo as a remote:\ngit remote add orgremote https://github.com/TulipaEnergy/TulipaClustering.jl","category":"page"},{"location":"developer/#Working-on-a-new-issue","page":"Dev setup","title":"Working on a new issue","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Fetch from the JSO remote and fast-forward your local main\ngit fetch orgremote\ngit switch main\ngit merge --ff-only orgremote/main\nBranch from main to address the issue (see below for naming)\ngit switch -c 42-add-answer-universe\nPush the new local branch to your personal remote repository\ngit push -u origin 42-add-answer-universe\nCreate a pull request to merge your remote branch into the org main.","category":"page"},{"location":"developer/#Branch-naming","page":"Dev setup","title":"Branch naming","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"If there is an associated issue, add the issue number.\nIf there is no associated issue, and the changes are small, add a prefix such as \"typo\", \"hotfix\", \"small-refactor\", according to the type of update.\nIf the changes are not small and there is no associated issue, then create the issue first, so we can properly discuss the changes.\nUse dash separated imperative wording related to the issue (e.g., 14-add-tests, 15-fix-model, 16-remove-obsolete-files).","category":"page"},{"location":"developer/#Commit-message","page":"Dev setup","title":"Commit message","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"Use imperative or present tense, for instance: Add feature or Fix bug.\nHave informative titles.\nIf necessary, add a body with details.","category":"page"},{"location":"developer/#Before-creating-a-pull-request","page":"Dev setup","title":"Before creating a pull request","text":"","category":"section"},{"location":"developer/","page":"Dev setup","title":"Dev setup","text":"[Advanced] Try to create \"atomic git commits\" (recommended reading: The Utopic Git History).\nMake sure the tests pass.\nMake sure the pre-commit tests pass.\nFetch any main updates from upstream and rebase your branch, if necessary:\nbash  git fetch orgremote  git rebase orgremote/main BRANCH_NAME\nThen you can open a pull request and work with the reviewer to address any issues.","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#Contents","page":"Reference","title":"Contents","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [TulipaClustering]","category":"page"},{"location":"reference/#TulipaClustering.AuxiliaryClusteringData","page":"Reference","title":"TulipaClustering.AuxiliaryClusteringData","text":"Structure to hold the time series used in clustering together with some summary statistics on the data.\n\n\n\n\n\n","category":"type"},{"location":"reference/#TulipaClustering.ClusteringData","page":"Reference","title":"TulipaClustering.ClusteringData","text":"Structure to hold the data needed for clustering.\n\n\n\n\n\n","category":"type"},{"location":"reference/#TulipaClustering.ClusteringResult","page":"Reference","title":"TulipaClustering.ClusteringResult","text":"Structure to hold the clustering result.\n\n\n\n\n\n","category":"type"},{"location":"reference/#TulipaClustering.DemandData","page":"Reference","title":"TulipaClustering.DemandData","text":"Schema for the demand.csv file.\n\n\n\n\n\n","category":"type"},{"location":"reference/#TulipaClustering.GenerationAvailabilityData","page":"Reference","title":"TulipaClustering.GenerationAvailabilityData","text":"Schema for the generation-availability.csv file.\n\n\n\n\n\n","category":"type"},{"location":"reference/#TulipaClustering.append_period_from_source_df_as_rp!-Tuple{DataFrames.AbstractDataFrame}","page":"Reference","title":"TulipaClustering.append_period_from_source_df_as_rp!","text":"append_period_from_source_df_as_rp!(df; source_df, period, rp, key_columns)\n\nExtracts a period with index period from source_df and appends it as a representative period with index rp to df, using key_columns as keys.\n\nExamples\n\njulia> source_df = DataFrame([:period => [1, 1, 2, 2], :time_step => [1, 2, 1, 2], :a .=> \"b\", :value => 5:8])\n4×4 DataFrame\n Row │ period  time_step  a       value\n     │ Int64   Int64      String  Int64\n─────┼──────────────────────────────────\n   1 │      1          1  b           5\n   2 │      1          2  b           6\n   3 │      2          1  b           7\n   4 │      2          2  b           8\n\njulia> df = DataFrame([:rep_period => [1, 1, 2, 2], :time_step => [1, 2, 1, 2], :a .=> \"a\", :value => 1:4])\n4×4 DataFrame\n Row │ rep_period  time_step  a       value\n     │ Int64       Int64      String  Int64\n─────┼──────────────────────────────────────\n   1 │          1          1  a           1\n   2 │          1          2  a           2\n   3 │          2          1  a           3\n   4 │          2          2  a           4\n\njulia> TulipaClustering.append_period_from_source_df_as_rp!(df; source_df, period = 2, rp = 3, key_columns = [:time_step, :a])\n6×4 DataFrame\n Row │ rep_period  time_step  a       value\n     │ Int64       Int64      String  Int64\n─────┼──────────────────────────────────────\n   1 │          1          1  a           1\n   2 │          1          2  a           2\n   3 │          2          1  a           3\n   4 │          2          2  a           4\n   5 │          3          1  b           7\n   6 │          3          2  b           8\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.combine_periods!-Tuple{DataFrames.AbstractDataFrame}","page":"Reference","title":"TulipaClustering.combine_periods!","text":"combine_periods!(df)\n\nModifies a dataframe df by combining the columns time_step and period into a single column time_step of global time steps. The period duration is inferred automatically from the maximum time step value, assuming that periods start with time step 1.\n\nExamples\n\njulia> df = DataFrame([:period => [1, 1, 2], :time_step => [1, 2, 1], :value => 1:3])\n3×3 DataFrame\n Row │ period  time_step  value\n     │ Int64   Int64      Int64\n─────┼──────────────────────────\n   1 │      1          1      1\n   2 │      1          2      2\n   3 │      2          1      3\n\njulia> TulipaClustering.combine_periods!(df)\n3×2 DataFrame\n Row │ time_step  value\n     │ Int64      Int64\n─────┼──────────────────\n   1 │         1      1\n   2 │         2      2\n   3 │         3      3\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.df_to_matrix_and_keys-Tuple{DataFrames.AbstractDataFrame, Vector{Symbol}}","page":"Reference","title":"TulipaClustering.df_to_matrix_and_keys","text":"df_to_matrix_and_keys(df, key_columns)\n\nConverts a dataframe df (in a long format) to a matrix, ignoring the columns specified as key_columns. The key columns are converted from long to wide format and returned alongside the matrix.\n\nExamples\n\njulia> df = DataFrame([:period => [1, 1, 2, 2], :time_step => [1, 2, 1, 2], :a .=> \"a\", :value => 1:4])\n4×4 DataFrame\n Row │ period  time_step  a       value\n     │ Int64   Int64      String  Int64\n─────┼──────────────────────────────────\n   1 │      1          1  a           1\n   2 │      1          2  a           2\n   3 │      2          1  a           3\n   4 │      2          2  a           4\n\njulia> m, k = TulipaClustering.df_to_matrix_and_keys(df, [:time_step, :a]); m\n2×2 Matrix{Float64}:\n 1.0  3.0\n 2.0  4.0\n\njulia> k\n2×2 DataFrame\n Row │ time_step  a\n     │ Int64      String\n─────┼───────────────────\n   1 │         1  a\n   2 │         2  a\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.find_auxiliary_data-Tuple{ClusteringData}","page":"Reference","title":"TulipaClustering.find_auxiliary_data","text":"find_auxiliary_data(clustering_data)\n\nCalculates auxiliary data associated with the clustering_data. These include:\n\nkey_columns_demand: key columns in the demand dataframe\nkey_columns_generation_availability: key columns in the generation availability dataframe\nperiod_duration: duration of time periods (in time steps)\nlast_period_duration: duration of the last period\nn_periods: total number of periods\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.find_period_weights-Tuple{Int64, Int64, Int64, Bool}","page":"Reference","title":"TulipaClustering.find_period_weights","text":"find_period_weights(period_duration, last_period_duration, n_periods, drop_incomplete_periods)\n\nFinds weights of two different types of periods in the clustering data:\n\ncomplete periods: these are all of the periods with length equal to period_duration.\nincomplete last period: if last period duration is less than period_duration, it is incomplete.\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.find_representative_periods-Tuple{ClusteringData, Int64}","page":"Reference","title":"TulipaClustering.find_representative_periods","text":"findrepresentativeperiods(     clusteringdata;     nrp = 10,     rescaledemanddata = true,     dropincompletelastperiod = false,     method = :kmeans,     distance = SqEuclidean(),     args...,   )\n\nFinds representative periods via data clustering.\n\nclustering_data: the data to perform clustering on.\nn_rp: number of representative periods to find.\nrescale_demand_data: if true, demands are first divided by the maximum demand value, so that they are between zero and one like the generation availability data\ndrop_incomplete_last_period: controls how the last period is treated if it is not complete: if this parameter is set to true, the incomplete period is dropped and the weights are rescaled accordingly; otherwise, clustering is done for n_rp - 1 periods, and the last period is added as a special shorter representative period\nmethod: clustering method to use, either :k_means and :k_medoids\ndistance: semimetric used to measure distance between data points.\nother named arguments can be provided; they are passed to the clustering method.\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.matrix_and_keys_to_df-Tuple{Matrix{Float64}, DataFrames.AbstractDataFrame}","page":"Reference","title":"TulipaClustering.matrix_and_keys_to_df","text":"matrix_and_keys_to_df(matrix, keys)\n\nConverts a a matrix matrix to a dataframe, appending the key columns given by keys.\n\nExamples\n\njulia> m = [1.0 3.0; 2.0 4.0]\n2×2 Matrix{Float64}:\n 1.0  3.0\n 2.0  4.0\n\njulia> k = DataFrame([:time_step => 1:2, :a .=> \"a\"])\n2×2 DataFrame\n Row │ time_step  a\n     │ Int64      String\n─────┼───────────────────\n   1 │         1  a\n   2 │         2  a\n\njulia> TulipaClustering.matrix_and_keys_to_df(m, k)\n4×4 DataFrame\n Row │ rep_period  time_step  a       value\n     │ Int64       Int64      String  Float64\n─────┼────────────────────────────────────────\n   1 │          1          1  a           1.0\n   2 │          1          2  a           2.0\n   3 │          2          1  a           3.0\n   4 │          2          2  a           4.0\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.read_clustering_data_from_csv_folder-Tuple{AbstractString}","page":"Reference","title":"TulipaClustering.read_clustering_data_from_csv_folder","text":"read_clustering_data_from_csv_folder(input_folder)\n\nReturns the TulipaClustering.ClusteringData reading all data from CSV files in the input_folder.\n\nThe following files are expected to exist in the input folder:\n\ndemand.csv: Following the TulipaClustering.DemandData specification.\ngeneration-availability.csv: Following the TulipaClustering.GenerationAvailabilityData specification.\n\nThe output contains:\n\ndemand: a DataFrame of demand values at different nodes per time step\ngeneration_availability: a DataFrame of availability coefficients for different generation technologies located at different nodes per time step\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.read_csv_with_schema-Tuple{Any, Any}","page":"Reference","title":"TulipaClustering.read_csv_with_schema","text":"read_csv_with_schema(file_path, schema)\n\nReads the csv with file_name at location path validating the data using the schema. It is assumes that the file's header is at the second row. The first row of the file contains some metadata information that is not used.\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.split_into_periods!-Tuple{ClusteringData}","page":"Reference","title":"TulipaClustering.split_into_periods!","text":"split_into_periods!(clustering_data; period_duration)\n\nModifies a TulipaClustering.ClusteringData structure by separating time steps into periods of length period_duration in the dataframes clustering_data.demand and clustering_data.generation_availability.\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.split_into_periods!-Tuple{DataFrames.AbstractDataFrame}","page":"Reference","title":"TulipaClustering.split_into_periods!","text":"split_into_periods!(df; period_duration=nothing)\n\nModifies a dataframe df by separating the column time_step into periods of length period_duration. The new data is written into two columns:\n\nperiod: the period ID;\ntime_step: the time step within the current period.\n\nIf period_duration is nothing, then all of the time steps are within the same period with index 1.\n\nExamples\n\njulia> df = DataFrame([:time_step => 1:4, :value => 5:8])\n4×2 DataFrame\n Row │ time_step  value\n     │ Int64      Int64\n─────┼──────────────────\n   1 │         1      5\n   2 │         2      6\n   3 │         3      7\n   4 │         4      8\n\njulia> TulipaClustering.split_into_periods!(df; period_duration=2)\n4×3 DataFrame\n Row │ period  time_step  value\n     │ Int64   Int64      Int64\n─────┼──────────────────────────\n   1 │      1          1      5\n   2 │      1          2      6\n   3 │      2          1      7\n   4 │      2          2      8\n\njulia> df = DataFrame([:period => [1, 1, 2], :time_step => [1, 2, 1], :value => 1:3])\n3×3 DataFrame\n Row │ period  time_step  value\n     │ Int64   Int64      Int64\n─────┼──────────────────────────\n   1 │      1          1      1\n   2 │      1          2      2\n   3 │      2          1      3\n\njulia> TulipaClustering.split_into_periods!(df; period_duration=1)\n3×3 DataFrame\n Row │ period  time_step  value\n     │ Int64   Int64      Int64\n─────┼──────────────────────────\n   1 │      1          1      1\n   2 │      2          1      2\n   3 │      3          1      3\n\njulia> TulipaClustering.split_into_periods!(df)\n3×3 DataFrame\n Row │ period  time_step  value\n     │ Int64   Int64      Int64\n─────┼──────────────────────────\n   1 │      1          1      1\n   2 │      1          2      2\n   3 │      1          3      3\n\n\n\n\n\n","category":"method"},{"location":"reference/#TulipaClustering.validate_df_and_find_key_columns-Tuple{DataFrames.AbstractDataFrame}","page":"Reference","title":"TulipaClustering.validate_df_and_find_key_columns","text":"validate_df_and_find_key_columns(df)\n\nChecks that dataframe df contains the necessary columns and returns a list of columns that act as keys (i.e., unique data identifiers within different periods).\n\nExamples\n\njulia> df = DataFrame([:period => [1, 1, 2], :time_step => [1, 2, 1], :a .=> \"a\", :value => 1:3])\n3×4 DataFrame\n Row │ period  time_step  a       value\n     │ Int64   Int64      String  Int64\n─────┼──────────────────────────────────\n   1 │      1          1  a           1\n   2 │      1          2  a           2\n   3 │      2          1  a           3\n\njulia> TulipaClustering.validate_df_and_find_key_columns(df)\n2-element Vector{Symbol}:\n :time_step\n :a\n\njulia> df = DataFrame([:value => 1])\n1×1 DataFrame\n Row │ value\n     │ Int64\n─────┼───────\n   1 │     1\n\njulia> TulipaClustering.validate_df_and_find_key_columns(df)\nERROR: DomainError with 1×1 DataFrame\n Row │ value\n     │ Int64\n─────┼───────\n   1 │     1:\nDataFrame must contain columns `time_step` and `value`\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = TulipaClustering\nDocTestSetup = quote\n    using DataFrames\nend","category":"page"},{"location":"#TulipaClustering","page":"Home","title":"TulipaClustering","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TulipaClustering.","category":"page"}]
}
