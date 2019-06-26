import { Product } from '../index'

export type Repo = {
    create: (data: Product) => Promise<Product>
    update: (data: Product) => Promise<Product>
    remove: (data: Product) => Promise<Product>
    get: (id: string) => Promise<Product>
    getAllByType: (type: string) => Promise<Product[]>
    getAll: () => Promise<Product[]>
}
export type Emit = {}
export type Infra = {
    repo: Repo
}
