const express = require('express')
const {adminauthentication,userauthentication} =require('../middlewares/auth.js')

const app = express()

app.get('/user/login',(req,res)=>{
    res.send('this is the user')
})

app.get("/admin/getdata",adminauthentication,(req,res)=>{
    res.send('all data are sent')
})

app.get('/user',userauthentication,(req,res)=>{
    res.send('this is the user data')
})

app.delete('/admin/deletedata',adminauthentication,(req,res)=>{
    res.send('the data is deleted')
})

app.listen(7777,()=>{
    console.log("App is running successfully")
})