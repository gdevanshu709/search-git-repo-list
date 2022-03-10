import express from 'express'
import gitRepoController from '../controllers/gitRepoController'
import validator from '../middleware/validator'

const router = express.Router()

router.get('/', validator, gitRepoController)

export default router
