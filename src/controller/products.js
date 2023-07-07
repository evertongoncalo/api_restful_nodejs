const ProductModel = require['../model/products']




async function get(request,response){
    const product = await ProductModel.find()

    response.send(product)

}

module.exports = {
    get,

}