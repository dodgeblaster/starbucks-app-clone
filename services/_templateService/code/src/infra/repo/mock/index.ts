import { Repo } from '../../../interfaces/infra'

export default (arr): Repo => ({
    example: async data => {
        arr.push({
            type: 'DB',
            name: 'example',
            data
        })
        return {
            data: true
        }
    }
})
