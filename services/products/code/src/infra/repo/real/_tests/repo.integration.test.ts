import io from '../../../../io'
import repository from '../'

describe('repo', () => {
    test('create will return input', async () => {
        const input = {
            id: 'product_1234',
            type: 'coffee',
            price: {
                tall: 300,
                grande: 400,
                venti: 500
            },
            imgUrl: 'www.site.com',
            description: 'text...',
            name: 'Blonde Coffee'
        }

        const repo = repository(io())
        const product = await repo.create(input)
        expect(product).toEqual(input)
    })
})
