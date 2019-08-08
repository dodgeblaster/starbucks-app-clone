import { createError } from 'apollo-errors'

const createGeneralError = x =>
    createError('general', {
        message: x
    })

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
            }
        }
    }
}
