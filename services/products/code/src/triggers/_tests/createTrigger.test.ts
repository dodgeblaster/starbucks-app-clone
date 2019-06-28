import { create } from '../index'

const validInput = () => ({
    name: 'Dark Coffee',
    description: 'text...',
    price: 400,
    type: 'Coffee',
    imrUrl: 'site.com/img.jpg'
})

const allKeysAreValidated = async x => {
    let invalidMessages = 0
    let keyLength = 0
    const keys = Object.keys(x)
    keyLength = keys.length

    for (const key of keys) {
        let invalid = validInput()
        delete invalid[key]
        try {
            await create(invalid)
        } catch (e) {
            expect(e.message).toBe('Invalid Input')
            invalidMessages++
        }
    }

    return keyLength === invalidMessages
}

describe('create', () => {
    test('will throw error if input is not valid', async done => {
        const x = await allKeysAreValidated(validInput())
        expect(x).toBe(true)
        done()
    })
})
