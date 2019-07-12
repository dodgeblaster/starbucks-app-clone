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
        expect(result.name).toBe('Blonde Coffee')
        expect(result.imgUrl).toBe('brewed-coffee/coffee.jpg')
        expect(result.price.tall).toBe(200)
        expect(result.price.grande).toBe(300)
        expect(result.price.venti).toBe(400)
        expect(result.type).toBe('coffee')
        expect(result.description).toBe('text...')
    })
})
