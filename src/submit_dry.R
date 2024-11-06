library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("path", "to", "nonmem", "models", "1001"))
submit_nonmem_model(mod, dry_run = TRUE)