import { useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import Highlighted from './Presentation'

const POSTS = gql`
    query allProducts {
        allProducts {
            id
            name
            price
            imgUrl
            type
            description
        }
    }
`

const mockData = [
    {
        name: 'Blonde Coffee',
        imgUrl: 'brewed-coffee/coffee.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
        name: 'Cappucino',
        imgUrl: 'espresso-drinks/cappucino/cappucino.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
        name: 'Caramel Macchiato',
        imgUrl: 'espresso-drinks/macchiatto/caramel-macchiato.jpg',
        price: {
            tall: 200,
            grande: 300,
            venti: 400
        }
    },
    {
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

const tweets = [
    `Me and the gang at #starbucks getting cold drinks on a rainy day. Hopefully more ridiculous memories like that day soon`,
    `Today is going to be a caffeinated day!`,
    `Much love to the lady in front of me who paid for my Starbucks coffee this morning `,
    `Enjoying my morning #coffee #starbucks`
]

export default () => {
    const { data, loading, error } = useQuery(POSTS)
    const [highlightingIndex, updateHighlightingIndex] = useState(0)
    const [tweetIndex, updateTweetIndex] = useState(0)

    setTimeout(() => {
        updateHighlightingIndex((highlightingIndex + 1) % 4)
        updateTweetIndex((tweetIndex + 1) % 4)
    }, 4000)

    if (loading) {
        return 'Loading...'
    }

    return (
        <Highlighted
            data={mockData}
            highlighting={highlightingIndex}
            tweetIndex={tweetIndex}
            tweet={tweets[tweetIndex]}
        />
    )
}
