import { CollectionConfig } from "payload/types";

export const Orders: CollectionConfig = {
    slug: 'orders',
    admin: {
        useAsTitle: 'Your Orders',
        description: 'A detailed summary of all your orders on Vastify.',
    },
    fields: [
        {
            name: '_isPaid',
            type: 'checkbox',
            access: {
               read: ({ req }) => req.user === 'admin',
               create: () => false,
               update: () => false,
            },
            admin: {
                hidden: true,
            },
            required: true,
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            admin: {
                hidden: true
            },
            required: true,
        },
        {
            name: 'products',
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
            required: true,
        },
    ],
}