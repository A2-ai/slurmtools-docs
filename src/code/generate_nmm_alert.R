library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("cluster-data", "user-homes", "user","slurmtools","model","nonmem", "1001"))
generaate_nmm_config(
  mod, 
  watched_dir = "/cluster-data/user-homes/user/slurmtools/model/nonmem",
  output_dir = "/cluster-data/user-homes/user/slurmtools/model/nonmem/in_progress",
  alerter_opts = list(
    alerter = Sys.which("curl"),
    command = "ntfy.sh/slurmtools_example_ntfy",
    message_flag = "d"
  )
)