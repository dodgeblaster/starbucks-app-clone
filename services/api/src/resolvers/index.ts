import io from './io'
import products from './products'
import tweets from './tweets'

export default {
    Query: {
        ...products(io).Query,
        ...tweets(io).Query
    }
}
