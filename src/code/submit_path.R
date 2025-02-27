library(slurmtools)
library(bbr)

nonmem_path <- file.path("path", "to", "nonmem", "models")

mod <- bbr::read_model(file.path(nonmem_path, "1001"))
submit_slurm_job(
  mod,
  slurm_job_template_path = file.path(nonmem_path, "new-slurm-job.tmpl")
)
