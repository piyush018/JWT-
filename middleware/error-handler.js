const { customApiError } = require('../error')
const { StatusCodes } = require("http-status-codes")
const errorMiddleHandler = (err, req, res, next) => {
    if (err instanceof customApiError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something Went wrong try Again Later")
}
module.exports = errorMiddleHandler