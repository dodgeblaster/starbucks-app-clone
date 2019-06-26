import * as ajv from 'ajv'

export default (schema, data) => {
    const a = new ajv()
    return a.validate(schema, data)
}
