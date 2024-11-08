library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("path", "to", "nonmem", "models", "1001"))
submission <- slurmtools::submit_nonmem_model(mod, ncpu = 13,)