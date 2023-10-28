
const result=document.querySelector('.result')

// const fetchPeople=async()=>{
//     try{
//         const {data}=await axios.get('/users')

//         const people=data.data.map((person)=>{
//             return `<h5>${person.userId}</h5>`
//         })
//         result.innerHTML=people.join('')
//     }
//     catch(error){
//         result.innerHTML=`<h2>something is wrong</h5>`
    

//     }
// }

// fetchPeople()

const btn=document.querySelector('.btn')
const inputForUserId=document.querySelector('.userId')
const inputForUserPassword=document.querySelector('.userPassword')
const error=document.querySelector('.result')





//checking if user exist and error handling
btn.addEventListener('click',async(e)=>{
    e.preventDefault()

    
    const nameValue=inputForUserId.value
    const passwordValue=inputForUserPassword.value
         
    try{
        const {data}=await axios.post('/login/auth',{userId:nameValue, password:passwordValue})
        const h5=document.createElement('h5')
        console.log(data.success)
        if(data.success==false && data.empty==false)
        {
            error.innerHTML=`incorrect user or Password`
        }
        else if(data.success==false &&  data.empty==true)
        {
            error.innerHTML=`please provide credentials`
        }
        else
        {
            window.location.href = '/';
            error.innerHTML=``
            btn.action='/'
        }
        // h5.textContent=data.person
        // result.appendChild(h5)
           
    }
    catch(error)
    {
        console.error('Error:', error);
    }

    inputForUserId.value=""
    inputForUserPassword.value=""

})