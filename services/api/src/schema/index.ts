export default `
type CoffeePrice {
    tall: Int
    grande: Int
    venti: Int
}

type Product {
    id: String
    name: String
    price: CoffeePrice
    imgUrl: String
    type: String
    description: String
}

type Tweet {
    about: String
    hashtags: [String]
    content: String
}

type Query {
    allProducts: [Product]
    allFeaturedProducts: [Product]
    allFeaturedTweets: [Tweet]
    allGeneralTweets: [Tweet]
}
`
