library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("path", "to", "nonmem", "models", "1001"))
submit_slurm_job(mod, partition = "cpu16mem128gb")