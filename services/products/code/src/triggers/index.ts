import io from '../io'
import infra from '../infra'
import domain from '../domain'
import validate from './validation'

const builtDomain = domain(infra(io()))

export const getAll = async () => {
    return await builtDomain.getAll()
}

export const getAllFeaturedProducts = async () => {
    return await builtDomain.getAllFeaturedProducts()
}

export const getAllByType = async event => {
    validate.getAllByType(event)
    return await builtDomain.getAllByType(event)
}

export const get = async event => {
    validate.get(event)
    return await builtDomain.get(event)
}

export const create = async event => {
    validate.create(event)
    return await builtDomain.create(event)
}

export const update = async event => {
    validate.update(event)
    return await builtDomain.update(event)
}

export const remove = async event => {
    validate.remove(event)
    return await builtDomain.remove(event)
}
