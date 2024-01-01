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
                
            },
        }
    ]
}