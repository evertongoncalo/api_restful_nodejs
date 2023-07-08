const router = require('express').Router()


const ProdController = require('../controller/products')


router.get('/products/:id?', ProdController.get)
router.post('/products', ProdController.post)
router.put('/products:id', ProdController.put)
router.delete('/products:id', ProdController.remove)






module.exports = router