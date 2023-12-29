import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    access: {

    },
    fields: [
        // User relation (hidden)
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false
            },
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Product Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'price',
            label: 'Price in USD',
            type: 'number',
            min: 0,
            max: 1000,
            required: true,
        },
    ],
}