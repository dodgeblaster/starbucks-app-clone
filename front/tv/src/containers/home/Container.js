import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import Presentation from './Presentation'

const PREFETCH = gql`
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

export default () => {
    useQuery(PREFETCH)
    return <Presentation />
}
