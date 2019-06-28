import { create } from '../index'

describe('create', () => {
    test('will throw error if input is not valid', async done => {
        try {
            await create({
                name: 'invalid'
            })
        } catch (e) {
            expect(e.message).toBe('Invalid Input')
            done()
        }
    })
})
