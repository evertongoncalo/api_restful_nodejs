const ProductModel = require('../model/products')




async function get(request,response){
    const {id} = request.params //pegando os dados por parametros, caso fosse na query seria ".query"

    const obj = id ? {_id : id} : null  //if ternário

    const product = await ProductModel.find(obj)


    response.send(product)

}
async function post(request,response){
    const {
        product,
        brand,
        price
    } = request.body //em post recebe-se body

    const prod = new ProductModel({
        product,
        brand,
        price
    })

    prod.save()
    response.send()

}
async function put(request,response){
    const {id} = request.params

    const product = await ProductModel.findOneAndUpdate({_id : id},request.body,{new : true})  //retorna atualizado
    response.send({
        message : 'success',
        product
    })

    /*const product = await ProductModel.findOne({_id : id})       Retorna produto item anterior

    await product.updateOne(request.body)

    response.send({
        message : 'success',
        product
    })*/
    

}

async function remove(request,response){
    const {id} = request.params

    const prod = await ProductModel.findOneAndDelete({_id : id}) 

    
    response.send({
        message : 'success',
        prod
    })

}



module.exports = {
    get,
    post,
    put,
    remove,


}