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
			//logo: {
			//	src: './src/assets/slurmtools.png',
			//},
			sidebar: [
				{
				  label: 'User Guide',
				  // introduce slurmtools and describe what it does
				  items: [
					{ label: 'Introduction', slug: 'guides/0_intro'},
					{ label: 'Getting started', slug: 'guides/1_getting_started' },
					// introduce submit functionality and how the tutorials work together
					{
						label: 'Submitting a job',
						collapsed: true,
						items: [
						  { label: 'How to submit a NONMEM job to slurm', slug: 'guides/submit_nonmem_model' },
						  { label: 'How to see available partitions', slug: 'guides/get_slurm_partitions' },
						  // This should go in a separate section about nmm I think
						  { label: 'How to generate a nmm config file', slug: 'guides/generate_nmm_config' },
						],
					  },
					// introduce monitoring functionality  
					{ 
						label: 'Monitoring submitted jobs', 
						collapsed: true,
						items: [
							{label: 'How to see submitted jobs', slug: 'guides/get_slurm_jobs' },
						],
					},
					// Introduce stopping functionality.
					{
						label: "Stopping a job",
						collapsed: true,
						items: [
							{label: 'How to cancel a job', slug: 'guides/cancel_job'},
						],
					},
					// Introduce expanding job templates
					{ 
						label: 'Slurm Job Templates',
						collapsed: true,
						items: [
							{ label: 'How to create a template file', slug: 'guides/simple_template_file' },
							{ label: 'How to expand a template file', slug: 'guides/simple_notifications' },
						],
					},
				  ],
				},
				{
				  label: 'Blogs',
				  collapsed: true,
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
				  collapsed: true,
				  items: [
					  { label: "Package site", link: 'https://a2-ai.github.io/slurmtools/' },
					  { label: "submit_nonmem_model", slug: 'reference/submit_nonmem_model_reference' },
					  { label: "get_slurm_partitions", link: 'https://a2-ai.github.io/slurmtools/reference/get_slurm_partitions.html' },
					  { label: "generate_nmm_config", link: 'https://a2-ai.github.io/slurmtools/reference/generate_nmm_config.html' }, 
					  { label: "get_slurm_jobs", link: 'https://a2-ai.github.io/slurmtools/reference/get_slurm_jobs.html' },
					  { label: "cancel_job", link: 'https://a2-ai.github.io/slurmtools/reference/cancel_job.html' },
				  ],
				},
			  ],
		}),
	],
});
