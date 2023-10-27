//modules 
const express=require('express')
const path=require('path')
const app=express()
const book=require('./datajs/books.js')
const users=require('./datajs/users.js')
const loginCredentials = require('./datajs/users.js')
let CcurrentUser="user";


//global var


//static files for css and logic js


app.use(express.static('./frontendFiles/home-page'))
app.use(express.static('./frontendFiles/login-page'))
app.use(express.urlencoded({extended:false}))
app.use(express.json()) //middle ware to prase incomming post req  from frontednd js
app.listen(5000 ,()=>{
    console.log("listening on port 5000...")
})

// http req

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./frontendFiles/home-page/homePage.html'))
})
app.post('/yoo',(req,res)=>{
    res.send({j:"j"})
})
app.get('/login-page',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./frontendFiles/login-page/loginIndex.html'))
    
})
app.get('/users',(req,res)=>{
    res.json({success:true,data:users})
})

app.post('/homeUser',(req,res)=>{
    const {a}=req.body
    const currentUser=CcurrentUser
    CcurrentUser="user"
    return res.json({currentUser})
    
})
// app.post('/users',(req,res)=>{
//     res.json({success:true})
// })

//to recivew data from frontend of login page
// app.post('/users',(req,res)=>{
//     console.log('done')
//     const {userId}=req.body
//     console.log(userId)
//     res.json({success:true})
   
// })

//login middle ware code
app.post('/users', (req, res) => {
    const { userId, password } = req.body;
    const liveUser = { userId, password };
    console.log(req.body);
    console.log(loginCredentials[0]);
    const user = loginCredentials.find((loginCredentials) => (loginCredentials.userId === liveUser.userId && loginCredentials.password === liveUser.password));
    console.log(user);

    if (!userId) {
        return res.json({ success: false , empty:true});
    } else if (!user) {
        console.log('not');
        return res.json({ success: false ,empty:false});
    }

    CcurrentUser=userId

    return res.json({ success: true ,empty:false});
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

//put method to update data
app.put('/book/add/:nameid',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    console.log(id,name);
    res.send('hello')
})


//for not anyonomus paths
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resourse not available</h1>')
})