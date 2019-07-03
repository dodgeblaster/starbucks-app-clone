export default `

type Product {
    id: String
    name: String
    price: Int
    imgUrl: String
    type: String
    description: String
}

type Query {
    product(id: String): Product
    allProducts: [Product]
}

type Mutation {
    create(name: String): Product
}
`
