const httpOutput = (status, x) => ({
    statusCode: status,
    body: JSON.stringify(x)
})

export default {
    http: httpOutput
}
