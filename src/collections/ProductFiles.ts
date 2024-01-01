import { User } from "../payload-types";
import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";

const addUser: BeforeChangeHook = ({
    req, data
}) => {
    const user = req.user as User | null
    
    return {
        ...data,
        user: user?.id
    }
}

const ownedOrPurchased: Access = async ({ req }) => {
    const user = req.user as User | null

    if (user?.role === 'admin')
        return true
    if (!user)
        return false

    const { docs: products } = await req.payload.find({
        collection: 'products',
        depth: 0,
        where: {
            user: {
                equals: user.id,
            },
        },
    })

    const ownedProductFileIds = products.map((prod) => prod.product_files).flat()
    const { docs: orders } = await req.payload.find({
        collection: 'orders',
        depth: 0,
        where:
    })
}

export const ProductFiles: CollectionConfig = {
    slug: 'product_files',
    admin: {
        hidden: ({ user }) => user.role !== 'admin', 
    },
    hooks: {
        beforeChange: [addUser]
    },
    access: {

    },
    upload: {
        staticURL: '/product_files',
        staticDir: 'product_files',
        mimeTypes: [
            'image/*',
            'font/*',
            'application/postscript',
        ],
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            admin: {
                // Hidden to typical users
                condition: () => false,
            },
            hasMany: false,
            required: true,
        },
    ]
}