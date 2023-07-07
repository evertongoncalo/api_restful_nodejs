const router = require('express').Router()


const ProdController = require('../controller/products')


router.get('/products/:id?', ProdController.get)
//router.post('/products', ProdController.get)
//router.put('/products:id', ProdController.get)
//router.delete('/products:id', ProdController.get)






module.exports = router