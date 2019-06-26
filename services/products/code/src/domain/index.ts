import { Infra } from '../interfaces/infra'
import * as uuid from 'uuid/v4'
export default (infra: Infra) => ({
    create: async data => {
        const dataWithId = {
            id: 'product_' + uuid(),
            ...data
        }

        await infra.repo.create(dataWithId)
        return dataWithId
    }
})
