library(slurmtools)
library(bbr)

nonmem_path <- file.path("path", "to", "nonmem", "models")

mod <- bbr::read_model(file.path(nonmem_path "1001"))
submit_nonmem_model(
    mod, 
    submission_root = file.path(nonmem_path, "Submission_directory")
)