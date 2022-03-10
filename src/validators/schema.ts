import Joi from 'joi'
import { ASC_ORDER, DESC_ORDER } from '../constant/constants'

const schema = Joi.object({
    page: Joi.number(),
    order: Joi.string().valid(ASC_ORDER, DESC_ORDER),
    search: Joi.string().required(),
    per_page: Joi.number(),
    sort: Joi.string(),
})

export default schema;