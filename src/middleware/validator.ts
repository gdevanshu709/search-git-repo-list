import { RequestHandler } from 'express'
import { FAILURE } from '../constant/errorCodes'
import schema from '../validators/schema'

const validator: RequestHandler = (req, res, next) => {
    const validation = schema.validate(req.query)
    if (validation.error) {
        res.status(FAILURE).json({ message: validation.error.details[0].message })
    } else {
        return next()
    }
}

export default validator
