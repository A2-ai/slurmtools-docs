#!/bin/bash
#SBATCH --job-name="1001-nonmem-run"
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --partition=cpu2mem4gb
#SBATCH --account=slurmtools

/usr/local/bin/nmm -c /cluster-data/user-homes/user/Packages/slurmtools/model/nonmem/1001.toml run