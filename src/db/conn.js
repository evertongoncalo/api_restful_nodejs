const mongoose = require('mongoose')
require('dotenv').config(); 

const keyURI = process.env.KEY_URI

async function main(){
    try {
        
        await mongoose.connect(keyURI)
        console.log(`Connected`)
    } catch (error) {
        console.log(`Erro: ${error}`)
        
    }
}


module.exports = main
