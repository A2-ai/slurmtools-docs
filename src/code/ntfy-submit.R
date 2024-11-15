library(slurmtools)
library(bbr)

nonmem_path <- file.path("path", "to", "nonmem", "models")

mod <- bbr::read_model(file.path(nonmem_path "1001"))
submit_nonmem_model(
    mod, 
    bbi_config_path = file.path(nonmem_path, "new-bbi.yml"),
    slurm_template_opts = list(
        ntfy = TRUE,
        mytopic = 'slurmtools_example_ntfy'
    )
)