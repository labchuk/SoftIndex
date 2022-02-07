const Router = require('../Router')
const controller = require('./user-controller')

const router = new Router()


router.get('/users',controller.getUsers)
router.post('/create-user',controller.createUser)

module.exports = router