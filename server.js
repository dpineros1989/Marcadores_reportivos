const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes=require('./routes')

const app=express()

app.set('port',9000)

const dbOptions={
    host:'localhost',
    port:'3306',
    user:'root',
    password:'12345678',
    database:'usuarios'
}

/// middelwars --------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())

/// routes -----------
app.get('/',(req,res)=>{
    res.send('Welcome to my APP')
})

app.use('/api',routes)

app.listen(app.get('port'),()=>{
    console.log(`server running to port ${app.get('port')}`)
})

