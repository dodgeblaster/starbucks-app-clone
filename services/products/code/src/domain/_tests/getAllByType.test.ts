import domain from '../index'
import infra from '../../infra'
import { Infra } from '../../interfaces/infra'

const mockInput = {
    type: 'coffee'
}

describe('getAllByType', () => {
    test('will call getAllByType on repo', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        await domain(mockInfra).getAllByType(mockInput)
        const event = infraState.filter(x => x.name === 'getAllByType')[0]

        expect(event).toBeTruthy()
        expect(event.data).toBe('coffee')
    })

    test('will return product', async () => {
        let infraState = []
        const mockInfra: Infra = infra({}, true, infraState)
        const result = await domain(mockInfra).getAllByType(mockInput)
        expect(result.length).toBe(4)
        expect(result[0].id.startsWith('product_')).toBeTruthy()
        expect(result[0].name).toBe('Blonde Coffee')
        expect(result[0].imgUrl).toBe('brewed-coffee/coffee.jpg')
        expect(result[0].description).toBe('text...')
    })
})
