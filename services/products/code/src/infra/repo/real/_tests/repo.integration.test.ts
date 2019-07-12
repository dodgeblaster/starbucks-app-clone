import io from '../../../../io'
import repository from '../'

describe('repo', () => {
    test('test starter', async () => {
        const repo = repository(io())
        // TODO: write integration tests for repo
        // const products = await repo.getAllFeaturedProducts()

        expect(1).toBe(1)
    })
})
