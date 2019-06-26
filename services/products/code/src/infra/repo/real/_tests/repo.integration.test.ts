import io from '../../../../io'
import repository from '../'

describe('repo', () => {
    test('test starter', async () => {
        const repo = repository(io())
        expect(1).toBe(1)
    })
})
