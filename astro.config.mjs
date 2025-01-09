// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: 'https://a2-ai.github.io',
	base: '/slurmtools-docs',
	markdown: {
		rehypePlugins: [
		  rehypeSlug,
		  [
			rehypeAutolinkHeadings,
			{
			  behavior: 'append',
			  content: {
				type: 'element',
				tagName: 'svg',
				properties: { 
				  className: ['heading-anchor'],
				  style: 'display: inline-block; margin-left: 0.5rem;',
				  viewBox: '0 0 16 16',
				  width: 16,
				  height: 16
				},
				children: [{
				  type: 'element',
				  tagName: 'path',
				  properties: {
					fill: 'currentColor',
					d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
				  }
				}]
			  },
			},
		  ],
		],
	  },
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
