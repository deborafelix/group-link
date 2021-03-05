function adapt(fn) {
    return async (req, res) => {
        try {
            const { body, params, query} = req
            const payload = { body, params, query}
            const result = await fn(payload);
            return res.status(result.statusCode).json(result.data)
        } catch(err) {
            return res.status(500).json({ message: err.message})
        }
    }
}

module.exports = { adapt }