import { PRODUCT_CATEGORIES } from '@/config';
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
            label: 'Product Price (USD)',
            type: 'number',
            min: 0,
            max: 1000,
            required: true,
        },
        {
            name: 'category',
            label: 'Product Category',
            type: 'select',
            options: PRODUCT_CATEGORIES.map(
                ({ label, value }) => ({ label, value })
            ),
            required: true,
        },
    ],
}