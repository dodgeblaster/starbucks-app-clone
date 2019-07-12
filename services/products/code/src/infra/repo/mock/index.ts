import { Repo } from '../../../interfaces/infra'

const products = [
    {
        id: 'product_1234',
        type: 'coffee',
        description: 'text...',
        name: 'Blonde Coffee',
        imgUrl: 'brewed-coffee/coffee.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
        id: 'product_1235',
        type: 'coffee',
        description: 'text...',
        name: 'Cappucino',
        imgUrl: 'espresso-drinks/cappucino/cappucino.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
        id: 'product_1236',
        type: 'coffee',
        description: 'text...',
        name: 'Caramel Macchiato',
        imgUrl: 'espresso-drinks/macchiatto/caramel-macchiato.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
        id: 'product_1237',
        type: 'coffee',
        description: 'text...',
        name: 'Mocha Frappucino',
        imgUrl:
            'frappucino-blended-beverages/coffee-frappucino/mocha-frappucino.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
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

    getAllFeaturedProducts: async () => {
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
