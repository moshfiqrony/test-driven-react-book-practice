module.exports = {
    get: jest.fn(
        () => Promise.resolve(
            {
                data: {}, 
                status: 300
            }
            )
        )
}