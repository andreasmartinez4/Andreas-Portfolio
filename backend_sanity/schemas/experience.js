export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'workplace',
            title: 'Workplace',
            type: 'string',
        },
        {
            name: 'location',
            title: 'City, State',
            type: 'string'
        },
        {
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string'
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
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'hasLogo',
            title: 'Has Logo',
            type: 'boolean',
        },
        {
            name: 'imageUrl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ]
}