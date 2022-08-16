export default {
    name: 'aboutTile',
    title: 'About Tiles',
    type: 'document',
    fields: [
        {
            name: 'header',
            title: 'Header',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text'
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