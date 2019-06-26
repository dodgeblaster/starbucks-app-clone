import { Emit } from '../../../interfaces/infra'

export default (arr): Emit => ({
    example: async data => {
        arr.push({
            type: 'EMIT',
            name: 'example',
            data
        })

        return true
    }
})
