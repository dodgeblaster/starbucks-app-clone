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

type Query {
    product(id: String): Product
    allProducts: [Product]
    allFeaturedProducts: [Product]
}

type Mutation {
    create(name: String): Product
}
`
