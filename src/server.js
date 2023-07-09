const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({   /*conserta o erro no json, deve instalar "npm i body-parser"  */
    extended:true
}))

const routes = require('./routes/routes')

/*conexao com o banco*/

const conn = require('./db/conn')

/*habilitar o cors */
const allowedOrigins = [
    'http://127.0.0.1:5500',

]
app.use(cors({
    origin :  function (origin, callback){
        let allowed = true
        if(!origin) {allowed = true} 
        if(!allowedOrigins.includes(origin)) {allowed = false} 

        callback(null,allowed)
    }
}))

conn()


const port = process.env.PORT || 8080
const path = require('path')

app.use('/api', routes)


app.listen(port, () => {
    console.log(`server is listenning on port ${port}`)
})