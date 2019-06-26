import repo from './repo'
import emit from './emit'
import { Infra } from '../interfaces/infra'

export default (io, mock = false, arr = []): Infra => {
    return {
        repo: repo(io, mock, arr),
        emit: emit(io, mock, arr)
    }
}
