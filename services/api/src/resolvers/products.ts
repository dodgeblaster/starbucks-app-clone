import { createError } from 'apollo-errors'

const createGeneralError = x =>
    createError('general', {
        message: x
    })

export default io => {
    // const stage = process.env.STAGE
    // const actions = {
    //     getProduct: async () =>
    //         await io.lambda(`origamai-groups-${stage}-getAllProjects`, {}),
    //     getAllProducts: async id =>
    //         await io.lambda(
    //             `origamai-groups-${stage}-getOrganizationsProjects`,
    //             id
    //         ),

    //         await io.lambda(`origamai-groups-${stage}-removeProject`, id)
    // }

    return {
        Query: {
            allProducts: async (root, data, ctx, info) => {
                return [
                    {
                        id: 'product_1234',
                        name: 'Dark Coffee',
                        price: 400,
                        imgUrl: 'https://google.com',
                        type: 'coffee',
                        description: 'text...'
                    },
                    {
                        id: 'product_1235',
                        name: 'Light Coffee',
                        price: 400,
                        imgUrl: 'https://google.com',
                        type: 'coffee',
                        description: 'text...'
                    }
                ]
            },

            product: async (root, data, ctx, info) => {
                // await io.allowedAccess({
                //     ctx,
                //     context: data.context,
                //     allowed: ['all']
                // })
                // const x = await actions.getProject({
                //     id: data.id,
                //     context: data.context
                // })

                // if (x.error) {
                //     throw new (createGeneralError(
                //         'There was a problem getting the project'
                //     ))()
                // }
                // return x

                return {
                    id: 'product_1234',
                    name: 'Dark Coffee',
                    price: 400,
                    imgUrl: 'https://google.com',
                    type: 'coffee',
                    description: 'text...'
                }
            }
        },
        Mutation: {
            create: async (root, data, ctx, info) => {
                return {
                    id: 'product_1234',
                    name: 'Dark Coffee',
                    price: 400,
                    imgUrl: 'https://google.com',
                    type: 'coffee',
                    description: 'text...'
                }
            }
        }
    }
}
