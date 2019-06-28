import io from '../io'
import setupInfra from './../infra'
import domain from '../domain'

export const getAll = async () => {
    const infra = setupInfra(io())
    return await domain(infra).getAll()
}

export const getAllByType = async event => {
    const infra = setupInfra(io())
    return await domain(infra).getAllByType(event)
}

export const get = async event => {
    const infra = setupInfra(io())
    return await domain(infra).get(event)
}

export const create = async event => {
    const infra = setupInfra(io())
    return await domain(infra).create(event)
}

export const update = async event => {
    const infra = setupInfra(io())
    return await domain(infra).update(event)
}

export const remove = async event => {
    const infra = setupInfra(io())
    return await domain(infra).remove(event)
}
