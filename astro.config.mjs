// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Slurmtools',
			social: {
				github: 'https://github.com/A2-ai/slurmtools',
			},
			sidebar: [
				{
				  label: 'User Guide',
				  // introduce slurmtools and describe what it does
				  items: [
					{ label: 'Introduction', slug: 'functions/0_intro'},
					// introduce submit functionality and how the functions work together
					{
						label: 'Submitting a job',
						items: [
						  { label: '1. Submitting a nonmem job', slug: 'functions/submit_nonmem_model' }, 
						  { label: '1.1. Getting slurm partitions', slug: 'functions/get_slurm_partitions' },
						  { label: '1.2. Generating nmm config', slug: 'functions/generate_nmm_config' },
						],
					  },
					// introduce monitoring functionality  
					{ 
						label: 'Monitoring submitted jobs', 
						items: [
							{label: '2. Monitoring submitted jobs', slug: 'functions/get_slurm_jobs' },
						],
					},
					// Introduce stopping functionality.
					{
						label: "Stopping a job",
						items: [
							{label: '3. Stopping a job', slug: 'functions/cancel_job'},
						],
					},
					// Introduce expanding job templates
					{ 
						label: 'Expanding Job Templates',
						items: [
						  { label: '4. Adding notifications', slug: 'functions/simple_notifications' },
						],
					},
				  ],
				},
				{
				  label: 'Examples',
				  autogenerate: { directory: 'examples' },
				},
				{
				  label: 'Slurmtools Reference',
				  link: 'https://a2-ai.github.io/slurmtools/' ,
				},
			  ],
		}),
	],
});
