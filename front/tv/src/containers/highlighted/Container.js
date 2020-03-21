import { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import Highlighted from './Presentation'
import fallbackData from './_fallbackData'

const POSTS = gql`
    query allProducts {
        allFeaturedProducts {
            id
            name
            price {
                tall
                grande
                venti
            }
            imgUrl
            type
            description
        }

        allFeaturedTweets {
            about
            hashtags
            content
        }

        allGeneralTweets {
            hashtags
            content
        }
    }
`

const applyTweetsToProducts = (products, tweets, fallbackTweets) => {
    return products.map(product => {
        const relevantTweets = tweets.filter(x => x.about === product.id)
        return {
            ...product,
            tweets: relevantTweets.length > 0 ? relevantTweets : fallbackTweets
        }
    })
}

export default () => {
    const { data, loading, error } = useQuery(POSTS)
    const [highlightingIndex, updateHighlightingIndex] = useState(0)

    setTimeout(() => {
        updateHighlightingIndex((highlightingIndex + 1) % 4)
    }, 4000)

    /**
     * Because this app is going to be displaying on a TV for customers to see,
     * displaying an error to customers may not be the right way to handle api errors.
     * Instead, we can show fallback data.
     */

    if (loading) {
        return <Highlighted loading={true} />
    }

    if (error) {
        return (
            <Highlighted
                data={fallbackData.featuredProducts}
                highlighting={highlightingIndex}
            />
        )
    }

    const productsWithTweets = applyTweetsToProducts(
        data.allFeaturedProducts,
        data.allFeaturedTweets,
        data.allGeneralTweets
    )

    return (
        <Highlighted
            data={productsWithTweets}
            highlighting={highlightingIndex}
        />
    )
}
