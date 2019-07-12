import { createError } from 'apollo-errors'

const createGeneralError = x =>
    createError('general', {
        message: x
    })

const allProducts = [
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

export default io => {
    const stage = process.env.STAGE
    const actions = {
        getAll: async () =>
            await io.lambda(`starbucksclone-products-${stage}-getAll`),

        getAllFeaturedProducts: async () =>
            await io.lambda(
                `starbucksclone-products-${stage}-getAllFeaturedProducts`
            )
    }

    return {
        Query: {
            allProducts: async (root, data, ctx, info) => {
                const products = await actions.getAllFeaturedProducts()

                if (products.error) {
                    throw new (createGeneralError(
                        'There was a problem getting all the products'
                    ))()
                }
                return products
            },

            allFeaturedProducts: async (root, data, ctx, info) => {
                const featuredProducts = await actions.getAllFeaturedProducts()

                if (featuredProducts.error) {
                    throw new (createGeneralError(
                        'There was a problem getting all the featured products'
                    ))()
                }
                return featuredProducts
            },

            product: async (root, data, ctx, info) => {
                // await io.allowedAccess({
                //     ctx,
                //     context: data.context,
                //     allowed: ['all']
                // })
                // const x = await actions.getProduct({
                //     id: data.id,
                //     context: data.context
                // })

                // if (x.error) {
                //     throw new (createGeneralError(
                //         'There was a problem getting the project'
                //     ))()
                // }
                // return x

                return allProducts[0]
            }
        },
        Mutation: {
            create: async (root, data, ctx, info) => {
                return allProducts[0]
            }
        }
    }
}
