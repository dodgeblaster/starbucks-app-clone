import real from './real'
import mock from './mock'

const adaptors = {
    real,
    mock
}
export default (io, mock, arr) => {
    return mock ? adaptors.mock(arr) : adaptors.real(io)
}
