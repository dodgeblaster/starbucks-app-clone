import { Repo } from '../../../interfaces/infra'

const isTest = process.env.NODE_ENV === 'test'
const table = isTest
    ? `${process.env.TABLE}-int`
    : `${process.env.TABLE}-${process.env.STAGE}`

export default (io): Repo => ({})
