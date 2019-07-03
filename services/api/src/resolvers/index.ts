import io from './io'
import products from './products'

export default {
    Query: {
        ...products(io).Query
    },

    Mutation: {
        ...products(io).Mutation
    }
}
