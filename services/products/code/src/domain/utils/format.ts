import * as uuid from 'uuid/v4'

export const addId = (x, prefix) => ({
    ...x,
    id: prefix + '_' + uuid()
})
