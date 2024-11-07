library(slurmtools)
library(bbr)

mod <- bbr::read_model(file.path("path", "to", "nonmem", "models", "1001"))
submit_nonmem_model(mod, slurm_template_opts = list('email' = 'matthews@a2-ai.com')