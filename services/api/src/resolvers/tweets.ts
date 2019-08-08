import { createError } from 'apollo-errors'

/**
 * When featured products is updated, the products service will emit a
 * 'featured-products-selected' event. The tweets service will listen
 * to that event, and build a new 'data view' of featured tweets.
 *
 * the 'allFeaturedTweets' function below will then just get the list
 * of featured tweets that was built from before.
 *
 * The frontend will then join the featured tweets with the featured
 * products. If there is any inconsistency, we will have a list
 * of generic starbucks tweets that we can fallback on.
 *
 */

const mockGeneralTweets = [
    {
        about: 'starbucks',
        hashtags: ['#starbucks'],
        content: `Today is going to be a caffeinated day!`
    }
]

const mockFeaturedTweets = [
    {
        about: 'product_1234',
        hashtags: ['#starbucks', '#blonde'],
        content: `Me and the gang at #starbucks getting cold drinks on a rainy day. Hopefully more ridiculous memories like that day soon`
    },

    {
        about: 'product_1236',
        hashtags: ['#starbucks', '#macchiato'],
        content: `Much love to the lady in front of me who paid for my Starbucks coffee this morning `
    },
    {
        about: 'product_1237',
        hashtags: ['#starbucks', '#frappucino'],
        content: `Enjoying my morning #frappucino #starbucks`
    }
]

export default io => {
    return {
        Query: {
            allFeaturedTweets: async (root, data, ctx, info) => {
                return mockFeaturedTweets
            },

            allGeneralTweets: async (root, data, ctx, info) => {
                return mockGeneralTweets
            }
        }
    }
}
