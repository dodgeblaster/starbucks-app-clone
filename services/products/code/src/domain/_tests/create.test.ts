import domain from '../index'
import infra from '../../infra'
import { Infra } from '../../interfaces/infra'

const mockInput = {
    name: 'Dark Coffee',
    imgUrl: 'https://example.jpg',
    price: 3,
    type: 'coffee',
    description: 'text...'
}

describe('create', () => {
    test('will call create on repo', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        await domain(mockInfra).create(mockInput)
        const event = infraState.filter(x => x.name === 'create')[0]

        expect(event).toBeTruthy()
        expect(event.data.id.startsWith('product_')).toBeTruthy()
        expect(event.data.name).toBe('Dark Coffee')
    })

    test('will return product with id', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        const result = await domain(mockInfra).create(mockInput)

        expect(result.id.startsWith('product_')).toBeTruthy()
        expect(result.name).toBe('Dark Coffee')
        expect(result.imgUrl).toBe('https://example.jpg')
        expect(result.price).toBe(3)
        expect(result.type).toBe('coffee')
        expect(result.description).toBe('text...')
    })
})
