import { Repo } from '../../../interfaces/infra'

const isTest = process.env.NODE_ENV === 'test'
const table = isTest
    ? `${process.env.TABLE}-int`
    : `${process.env.TABLE}-${process.env.STAGE}`

const formatProduct = x => ({
    id: x.SK,
    type: x.PK,
    price: x.price,
    imgUrl: x.imgUrl,
    description: x.description,
    name: x.name
})

export default (io): Repo => ({
    get: async id => {
        const x = await io.dynamo(table).querySkBeginsWith({
            PK: 'coffee',
            SK: id
        })

        return formatProduct(x)
    },
    getAll: async () => {
        const x = await io.dynamo(table).querySkBeginsWith({
            PK: 'coffee',
            SK: 'product'
        })

        return x.map(formatProduct)
    },
    getAllFeaturedProducts: async () => {
        const x = await io.dynamo(table).querySkBeginsWith({
            PK: 'coffee',
            SK: 'product'
        })

        return x.map(formatProduct)
    },
    getAllByType: async type => {
        const x = await io.dynamo(table).querySkBeginsWith({
            PK: type,
            SK: 'product'
        })

        return x.map(formatProduct)[0]
    },
    create: async data => {
        // TODO: write dynamo function
        const x = await io.dynamo(table).put({
            PK: data.type,
            SK: data.id,
            description: data.description,
            name: data.name,
            imgUrl: data.imgUrl,
            price: data.price
        })
        return data
    },
    update: async data => {
        // TODO: write dynamo function
        return data
    },
    remove: async data => {
        // TODO: write dynamo function
        return data
    }
})
