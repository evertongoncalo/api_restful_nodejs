const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({   /*conserta o erro no json, deve instalar "npm i body-parser"  */
    extended:true
}))

const routes = require('./routes/routes')

/*conexao com o banco*/

const conn = require('./db/conn')

conn()

const port = process.env.PORT || 8080
const path = require('path')

app.use('/api', routes)


app.listen(port, () => {
    console.log(`server is listenning on port ${port}`)
})