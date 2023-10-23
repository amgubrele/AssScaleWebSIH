//modules 
const express=require('express')
const path=require('path')
const app=express()
const book=require('./datajs/books.js')
const users=require('./datajs/users.js')
const loginCredentials = require('./datajs/users.js')


//global var


//static files for css and logic js


app.use(express.static('./home-page'))
app.use(express.static('./login-page'))
app.use(express.urlencoded({extended:false}))
app.use(express.json()) //middle ware to prase incomming post req  from frontednd js
app.listen(5000 ,()=>{
    console.log("listening on port 5000...")
})

// frontend serving functions

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./home-page/homePage.html'))
})
app.get('/login-page',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./login-page/loginIndex.html'))
    
})
app.get('/users',(req,res)=>{
    res.json({success:true,data:users})
})

//to recivew data from frontend of login page
app.post('/users',(req,res)=>{
    console.log('done')
    const {userId}=req.body
    console.log(userId)
    res.json({success:true})
   
})

//login middle ware code
app.post('/login',(req,res)=>{
    const{userId,password}=req.body
    const liveUser={userId,password}
    console.log(req.body)
    console.log(loginCredentials[0])
    const user=loginCredentials.find((loginCredentials)=>(loginCredentials.userId===liveUser.userId && loginCredentials.password===liveUser.password))
    if(!userId)
    {
        return res.send('please provide userid and pass.')
    }
    else if(!user)
    {
        return res.send('no user found')
    }
    return res.send(`welcome ${userId}`)
})
app.get('/books/:nameid',(req,res)=>{                                   //search for a particular book by name
    console.log(req.params)
    const singlebook=book.find((book)=>book.name===String(req.params.nameid))
    if(!singlebook)
    {
        return res.status(404).send('not found')
        
    }
    return res.json(singlebook)
})


//for not anyonomus paths
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resourse not available</h1>')
})