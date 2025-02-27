library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("path", "to", "nonmem", "models", "1001"))
submission <- slurmtools::submit_slurm_job(mod, ncpu = 13)

