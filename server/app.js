//modules 
const express=require('express')
const path=require('path')
const app=express()
const book=require('./datajs/books.js')
const login=require('./routes/loginAuth.js')

//port management 
app.listen(5000 ,()=>{
    console.log("listening on port 5000...")
})


//static files css and js 
app.use(express.static('./frontendFiles/home-page'))
app.use(express.static('./frontendFiles/login-page'))

//data from other type to json  
app.use(express.urlencoded({extended:false})) //from backend
app.use(express.json()) //from frontend


//routes
app.use('/login',login)




//serving home page
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./frontendFiles/home-page/homePage.html'))
})


//serving books
app.get('/books/:nameid',(req,res)=>{                                   //search for a particular book by name
    console.log(req.params)
    const singlebook=book.find((book)=>book.name===String(req.params.nameid))
    if(!singlebook)
    {
        return res.status(404).send('not found')
        
    }
    return res.json(singlebook)
})

//sending book that is searched
app.post('/book/search',(req,res)=>{
    const {bookName,Author,category}=req.body
    console.log(bookName,Author,category)
    const searchedBook={bookName,Author,category}

    const singlebook=book.find((book)=>book.name===String(searchedBook.bookName))
    return res.send(singlebook)
})


//for not anyonomus paths
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resourse not available</h1>')
    


})