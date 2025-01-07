# Slurmtools Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation for slurmtools, an R package designed to simplify the process of submitting and monitoring NONMEM jobs on SLURM workload managers.

## What is slurmtools?

At its core, `slurmtools` is a lightweight yet powerful package, designed to streamline your interactions with Slurm using simple slurm command wrappers. Here's a quick overview of what you can do:

1. submit_slurm_job - Easily submit jobs with this `sbatch` wrapper
2. get_slurm_jobs - Get a summary of running jobs with this `squeue` wrapper
3. cancel_slurm_job - Cancel a job with this `scancel` wrapper
4. get_slurm_partitions - Get a list of available partitions with this `sinfo` wrapper


## 🚀 Project Structuree
```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
Documentation content is written in `.md` or `.mdx` files in the `src/content/docs/` directory. 
Images and other assets can be found in `src/assets/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `npm install`         | Installs dependencies                            |
| `npm run dev`         | Starts local dev server at `localhost:4321`      |
| `npm run build`       | Build your production site to `./dist/`          |
| `npm run preview`     | Preview your build locally, before deploying     |

## Contributing

Contributions to improve the documentation are welcome! Please feel free to:
- Submit pull requests for content updates or corrections
- Open issues for any errors or unclear sections
