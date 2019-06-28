import domain from '../index'
import infra from '../../infra'
import { Infra } from '../../interfaces/infra'

const mockInput = {
    id: 'product_1234',
    name: 'Dark Coffee',
    imgUrl: 'https://example.jpg',
    price: 4,
    type: 'coffee',
    description: 'text...'
}

describe('update', () => {
    test('will call update on repo', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        await domain(mockInfra).update(mockInput)
        const event = infraState.filter(x => x.name === 'update')[0]

        expect(event).toBeTruthy()
        expect(event.data.id.startsWith('product_')).toBeTruthy()
        expect(event.data.name).toBe('Dark Coffee')
        expect(event.data.price).toBe(4)
    })

    test('will return product', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        const result = await domain(mockInfra).update(mockInput)

        expect(result.id.startsWith('product_')).toBeTruthy()
        expect(result.name).toBe('Dark Coffee')
        expect(result.imgUrl).toBe('https://example.jpg')
        expect(result.price).toBe(4)
        expect(result.type).toBe('coffee')
        expect(result.description).toBe('text...')
    })
})
