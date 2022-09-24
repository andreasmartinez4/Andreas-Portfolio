export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'projectName',
			title: 'Project Name',
			type: 'string',
		},
		{
			name: 'startDate',
			title: 'Start Date',
			type: 'string'
		},
		{
			name: 'endDate',
			title: 'End Date',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
		{
			name: 'githubURL',
			title: 'Github URL',
			type: 'text',
		},
		{
			name: 'programmingIcons',
			title: 'Programming Icon',
			type: 'array',
			of: [{type: 'image'}],
		},
		{
			name: 'images',
			title: 'Image',
			type: 'array',
			of: [{type: 'image'}],
		},
	]
}