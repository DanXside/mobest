const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRoute')
const userRouter = require('./userRoute')
const typeRouter = require('./typeRoute')

router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)

module.exports = router