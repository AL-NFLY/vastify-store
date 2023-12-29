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
        {
            // User relation (hidden)
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
        {
            name: 'product_files',
            label: 'Product File(s)',
            type: 'relationship',
            relationTo: 'product_files',
            hasMany: false,
            required: true,
        },
        {
            name: 'approvedForSale',
            label: 'Product Status',
            type: 'select',
            access: {
                create: ({ req }) => req.user.role === 'admin',
                read:  ({ req }) => req.user.role === 'admin',
                update: ({ req }) => req.user.role === 'admin',
            },
            defaultValue: 'pending',
            options: [
                {
                    label: 'Pending verification',
                    value: 'pending',
                },
                {
                    label: 'Approved',
                    value: 'approved',
                },
                {
                    label: 'Denied',
                    value: 'denied',
                },
            ],
        },
    ],
}