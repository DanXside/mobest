const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRoute')
const userRouter = require('./userRoute')
const typeRouter = require('./typeRoute')
const basketRoute = require('./basketRoute')

router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/basket', basketRoute)

module.exports = router