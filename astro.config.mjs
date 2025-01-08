// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai.github.io',
	base: '/slurmtools-docs',
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
					{ label: 'Introduction', slug: 'guides/intro'},
					{ label: 'Getting started', slug: 'guides/getting_started' },
					// introduce submit functionality and how the tutorials work together
					{
						label: 'Submitting a job',
						collapsed: true,
						items: [
						  { label: 'How to submit a NONMEM job to slurm', slug: 'guides/submit_slurm_job' },
						  { label: 'How to see available partitions', slug: 'guides/get_slurm_partitions' },
						],
					  },
					// introduce monitoring functionality  
					{ 
						label: 'Monitoring a job', 
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
							{label: 'How to cancel a job', slug: 'guides/cancel_slurm_job'},
						],
					},
					// Introduce expanding job templates
					{ 
						label: 'Config and template files',
						collapsed: true,
						items: [
							{ label: 'How to write a template file', slug: 'guides/simple_template_file' },
							{ label: 'How to generate a nmm config file', slug: 'guides/generate_nmm_config' },
						],
					},
				  ],
				},
				{
				  label: 'Beyond the basics',
				  collapsed: true,
				  items: [
					{ label: 'Adding notifications for slurm job status', slug: 'blogs/simple_notifications' },
					{ label: 'Slurm job template for using nmm', slug: 'blogs/nmm_template' },
					{ label: 'Adding an alerter to nmm', slug: 'blogs/using_alerter_with_nmm' },
					{ label: 'Deciding which partition to use', slug: 'blogs/partition_choice' },
				  ]
				},
				{
				  label: 'Slurmtools Reference',
				  collapsed: true,
				  items: [
					  { label: "Package Repository", link: 'reference/package_repository' },
					  { label: "submit_slurm_job", slug: 'reference/submit_slurm_job_reference' },
					  { label: "cancel_slurm_job", slug: 'reference/cancel_slurm_job_reference' },
					  { label: "generate_nmm_config", link: 'reference/generate_nmm_config_reference' }, 
					  { label: 'Default values provided to template', slug: 'reference/values_provided_to_template' },
				  ],
				},
			  ],
		}),
	],
});
