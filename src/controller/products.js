const ProductModel = require('../model/products')




async function get(request,response){
    const {id} = request.params
    const product = await ProductModel.find({ _id: id})


    response.send(product)

}

module.exports = {
    get,

}