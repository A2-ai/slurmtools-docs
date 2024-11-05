// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'slurmtools',
			social: {
				github: 'https://github.com/A2-ai/slurmtools',
			},
			sidebar: [
				{
				  label: 'User Guides',
				  // introduce slurmtools and describe what it does
				  items: [
					{ label: 'Introduction', slug: 'guides/0_intro'},
					{ label: 'Getting started', slug: 'guides/1_getting_started' },
					// introduce submit functionality and how the tutorials work together
					{
						label: 'Submitting a job',
						items: [
						  { label: '1. How to submit a NONMEM job to slurm', slug: 'guides/submit_nonmem_model' }, 
						  { label: '1.1. How to see available partitions', slug: 'guides/get_slurm_partitions' },
						  // This should go in a separate section about nmm I think
						  { label: '1.2. How to generate a nmm config file', slug: 'guides/generate_nmm_config' },
						],
					  },
					// introduce monitoring functionality  
					{ 
						label: 'Monitoring submitted jobs', 
						items: [
							{label: '2. How to see submitted jobs', slug: 'guides/get_slurm_jobs' },
						],
					},
					// Introduce stopping functionality.
					{
						label: "Stopping a job",
						items: [
							{label: '3. How to cancel a job', slug: 'guides/cancel_job'},
						],
					},
					// Introduce expanding job templates
					{ 
						label: 'Expanding Job Templates',
						items: [
						  { label: '4. How to get notifications', slug: 'guides/simple_notifications' },
						],
					},
				  ],
				},
				{
				  label: 'Blogs',
				  items: [
					{ label: 'Deciding which partition to use', slug: 'blogs/submit' },
				  ]
				},
				//{
				//  label: 'Examples',
				//  autogenerate: { directory: 'examples' },
				//},
				{
				  label: 'Slurmtools Reference',
				  link: 'https://a2-ai.github.io/slurmtools/' ,
				},
			  ],
		}),
	],
});
