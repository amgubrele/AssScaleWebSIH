const express=require('express');
const router=express.Router();
const users=require('../datajs/users.js')
const path=require('path')
let CcurrentUser={userId:"user",userType:"student"};
const loginCredentials = require('../datajs/users.js')


//login page
router.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontendFiles/login-page/loginIndex.html'))
    
})


//login middle ware code authentficition
router.post('/auth', (req, res) => {
    const { userId, password,userType } = req.body;
    const liveUser = { userId, password,userType };
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

    CcurrentUser={userId,userType}

    return res.json({ success: true ,empty:false});
})


//serveing home with userlogged in
router.post('/home/user',(req,res)=>{
    const {a}=req.body
    const currentUser=CcurrentUser
    CcurrentUser={userId:"user",userType:"student"}
    console.log(currentUser)
    return res.json({currentUser})
    
})



module.exports=router