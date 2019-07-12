import io from '../io'
import setupInfra from './../infra'
import domain from '../domain'
import validate from './validation'

export const getAll = async () => {
    const infra = setupInfra(io())
    return await domain(infra).getAll()
}

export const getAllFeaturedProducts = async () => {
    const infra = setupInfra(io())
    return await domain(infra).getAllFeaturedProducts()
}

export const getAllByType = async event => {
    validate.getAllByType(event)
    const infra = setupInfra(io())
    return await domain(infra).getAllByType(event)
}

export const get = async event => {
    validate.get(event)
    const infra = setupInfra(io())
    return await domain(infra).get(event)
}

export const create = async event => {
    validate.create(event)
    const infra = setupInfra(io())
    return await domain(infra).create(event)
}

export const update = async event => {
    validate.update(event)
    const infra = setupInfra(io())
    return await domain(infra).update(event)
}

export const remove = async event => {
    validate.remove(event)
    const infra = setupInfra(io())
    return await domain(infra).remove(event)
}
