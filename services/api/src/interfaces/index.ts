type Roles = 'superAdmin' | 'storeOwner' | 'barista' | 'tv' | 'customer'

export type User = {
    id: String
    name: String
    email: String
    roles: Roles[]
}
