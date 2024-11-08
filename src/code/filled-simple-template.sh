#!/bin/bash
#SBATCH --job-name="1001-nonmem-run"
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --partition=cpu2mem4gb
#SBATCH --account=slurmtools

#/cluster-data/user-homes/user/Packages/slurmtools
# submit_nonmem_model uses the whisker package to populate template files
# https://github.com/edwindj/whisker


/usr/local/bin/bbi nonmem run local /cluster-data/user-homes/user/Packages/slurmtools/model/nonmem/1001.mod --config /cluster-data/user-homes/user/Packages/slurmtools/model/nonmem/bbi.yaml
