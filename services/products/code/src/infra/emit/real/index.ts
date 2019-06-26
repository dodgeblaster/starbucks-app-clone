export default io => ({
    example: async data => {
        await io.emit(`example-${process.env.STAGE}`, data)
        return true
    }
})
