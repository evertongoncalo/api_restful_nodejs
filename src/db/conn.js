const mongoose = require('mongoose')

const dbName = "api_restfult"

const uri = ``

async function main(){
    try {
        
        await mongoose.connect(uri)
        console.log(`Connected`)
    } catch (error) {
        console.log(`Erro: ${error}`)
        
    }
}


module.exports = main
