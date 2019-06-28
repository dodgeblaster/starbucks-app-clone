const INVALID_MESSAGE = 'Invalid Input'

const exists = x => x !== null || x !== undefined
const validType = (x, type) => exists(x) && typeof x === type
const throwError = () => {
    throw new Error(INVALID_MESSAGE)
}
const isString = x => !validType(x, 'string') && throwError()
const isNumber = x => !validType(x, 'number') && throwError()

export default {
    get: x => {
        isString(x.id)
        return true
    },

    getAllByType: x => {
        isString(x.type)
        return true
    },

    create: x => {
        isString(x.name)
        isString(x.type)
        isString(x.description)
        isString(x.imgUrl)
        isNumber(x.price)
        return true
    },

    update: x => {
        isString(x.id)
        isString(x.name)
        isString(x.type)
        isString(x.description)
        isString(x.imgUrl)
        isNumber(x.price)
        return true
    },

    remove: x => {
        isString(x.id)
        isString(x.name)
        isString(x.type)
        isString(x.description)
        isString(x.imgUrl)
        isNumber(x.price)
        return true
    }
}
