const customApiError = require("./custom-error")
const { StatusCodes } = require("http-status-codes")
class UnauthorizedError extends customApiError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}
module.exports = UnauthorizedError