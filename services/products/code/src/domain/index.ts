import { Infra } from '../interfaces/infra'
import { addId } from './utils/format'

export default (infra: Infra) => ({
    get: async data => {
        const product = await infra.repo.get(data.id)
        return product
    },

    getAllByType: async data => {
        const product = await infra.repo.getAllByType(data.type)
        return product
    },

    getAll: async () => {
        const product = await infra.repo.getAll()
        return product
    },

    create: async data => {
        const dataWithId = addId(data, 'product')
        await infra.repo.create(dataWithId)
        return dataWithId
    },

    update: async data => {
        await infra.repo.update(data)
        return data
    },

    remove: async data => {
        await infra.repo.remove(data)
        return data
    }
})
