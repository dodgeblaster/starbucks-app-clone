import { Repo } from '../../../interfaces/infra'

const products = [
    {
        id: 'product_1234',
        name: 'Dark Coffee',
        imgUrl: 'https://example.jpg',
        price: 3,
        type: 'coffee',
        description: 'text...'
    },
    {
        id: 'product_1235',
        name: 'Light Coffee',
        imgUrl: 'https://example.jpg',
        price: 3,
        type: 'coffee',
        description: 'text...'
    }
]

export default (arr): Repo => ({
    get: async data => {
        arr.push({
            type: 'DB',
            name: 'get',
            data
        })

        return products[0]
    },
    getAll: async () => {
        arr.push({
            type: 'DB',
            name: 'getAll',
            data: {}
        })

        return products
    },
    getAllByType: async data => {
        arr.push({
            type: 'DB',
            name: 'getAllByType',
            data
        })

        return products
    },
    create: async data => {
        arr.push({
            type: 'DB',
            name: 'create',
            data
        })

        return data
    },
    update: async data => {
        arr.push({
            type: 'DB',
            name: 'update',
            data
        })

        return data
    },
    remove: async data => {
        arr.push({
            type: 'DB',
            name: 'remove',
            data
        })

        return data
    }
})
