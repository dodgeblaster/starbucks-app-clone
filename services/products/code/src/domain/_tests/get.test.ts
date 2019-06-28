import domain from '../index'
import infra from '../../infra'
import { Infra } from '../../interfaces/infra'

const mockInput = {
    id: 'product_1234'
}

describe('get', () => {
    test('will call create on repo', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        await domain(mockInfra).get(mockInput)
        const event = infraState.filter(x => x.name === 'get')[0]

        expect(event).toBeTruthy()
        expect(event.data.startsWith('product_')).toBeTruthy()
    })

    test('will return product', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        const result = await domain(mockInfra).get(mockInput)

        expect(result.id.startsWith('product_')).toBeTruthy()
        expect(result.name).toBe('Dark Coffee')
        expect(result.imgUrl).toBe('https://example.jpg')
        expect(result.price).toBe(3)
        expect(result.type).toBe('coffee')
        expect(result.description).toBe('text...')
    })
})
