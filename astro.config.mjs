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
				  label: 'Tutorials',
				  // introduce slurmtools and describe what it does
				  items: [
					{ label: 'Introduction', slug: 'tutorials/0_intro'},
					// introduce submit functionality and how the tutorials work together
					{
						label: 'Submitting a job',
						items: [
						  { label: '1. How to submit a NONMEM job to slurm', slug: 'tutorials/submit_nonmem_model' }, 
						  { label: '1.1. How to see available partitions', slug: 'tutorials/get_slurm_partitions' },
						  // This should go in a separate section about nmm I think
						  { label: '1.2. How to generate a nmm config file', slug: 'tutorials/generate_nmm_config' },
						],
					  },
					// introduce monitoring functionality  
					{ 
						label: 'Monitoring submitted jobs', 
						items: [
							{label: '2. How to see submitted jobs', slug: 'tutorials/get_slurm_jobs' },
						],
					},
					// Introduce stopping functionality.
					{
						label: "Stopping a job",
						items: [
							{label: '3. How to cancel a job', slug: 'tutorials/cancel_job'},
						],
					},
					// Introduce expanding job templates
					{ 
						label: 'Expanding Job Templates',
						items: [
						  { label: '4. How to get notifications', slug: 'tutorials/simple_notifications' },
						],
					},
				  ],
				},
				{
				  label: 'Guides',
				  items: [
					{ label: 'Deciding which partition to use', slug: 'guides/submit' },
				  ]
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
