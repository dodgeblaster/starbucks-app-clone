import resolvers from './src/resolvers'
const { GraphQLServerLambda } = require('graphql-yoga')
import typeDefs from './src/schema/'

export const server = (event, ctx, callback) => {
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         data: 'five'
    //     })
    // }
    if (event.source === 'serverless-plugin-warmup') {
        console.log('warm up')
        return
    }
    try {
        new GraphQLServerLambda({
            typeDefs,
            resolvers: resolvers,
            context: ctx => ({
                ...ctx.event.requestContext.authorizer
            })
        }).graphqlHandler(event, ctx, callback)
    } catch (e) {
        throw new Error(e)
    }
}
