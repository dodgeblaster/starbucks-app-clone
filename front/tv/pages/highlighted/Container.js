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
    }
`

export default () => {
    const { data, loading, error } = useQuery(POSTS)
    const [highlightingIndex, updateHighlightingIndex] = useState(0)
    const [tweetIndex, updateTweetIndex] = useState(0)

    setTimeout(() => {
        updateHighlightingIndex((highlightingIndex + 1) % 4)
        updateTweetIndex((tweetIndex + 1) % 4)
    }, 4000)

    /**
     * Because this app is going to be displaying on a TV for customers to see,
     * displaying an error to customers may not be the right way to handle api errors.
     * Instead, we can show fallback data.
     */

    const featuredProducs = error
        ? fallbackData.featuredProducts
        : data.allFeaturedProducts

    const tweets = fallbackData.tweets

    return (
        <Highlighted
            loading={loading}
            data={featuredProducs}
            highlighting={highlightingIndex}
            tweetIndex={tweetIndex}
            tweet={tweets[tweetIndex]}
        />
    )
}
