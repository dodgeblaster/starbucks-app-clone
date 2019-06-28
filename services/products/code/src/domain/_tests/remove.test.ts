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

describe('remove', () => {
    test('will call remove on repo', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        await domain(mockInfra).remove(mockInput)
        const event = infraState.filter(x => x.name === 'remove')[0]

        expect(event).toBeTruthy()
        expect(event.data.id.startsWith('product_')).toBeTruthy()
        expect(event.data.name).toBe('Dark Coffee')
    })

    test('will return product that was removed', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        const result = await domain(mockInfra).remove(mockInput)

        expect(result.id.startsWith('product_')).toBeTruthy()
        expect(result.name).toBe('Dark Coffee')
        expect(result.imgUrl).toBe('https://example.jpg')
        expect(result.price).toBe(4)
        expect(result.type).toBe('coffee')
        expect(result.description).toBe('text...')
    })
})
