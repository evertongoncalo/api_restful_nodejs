const mongoose = require('mongoose')

const dbName = "api_restfult"

const uri = `mongodb+srv://evertonaga88:%40Evt298747@cluster0.b4ruaym.mongodb.net/${dbName}?retryWrites=true`

async function main(){
    try {
        
        await mongoose.connect(uri)
        console.log(`Connected`)
    } catch (error) {
        console.log(`Erro: ${error}`)
        
    }
}


module.exports = main
