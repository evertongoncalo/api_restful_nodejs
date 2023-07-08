const ProductModel = require('../model/products')




async function get(request,response){
    const {id} = request.params

    const obj = id ? {_id : id} : null  //if ternário

    const product = await ProductModel.find(obj)


    response.send(product)

}

module.exports = {
    get,

}