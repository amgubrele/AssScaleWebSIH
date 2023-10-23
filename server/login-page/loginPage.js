
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


btn.addEventListener('click',async(e)=>{
    e.preventDefault()
    
    const nameValue=inputForUserId.value
    const passwordValue=inputForUserPassword.value

    if(nameValue=="" || passwordValue=="")
    {
        console.log('form is empty')
        error.innerHTML=`please provide Credentials`
        // const h5=document.createElement('h5')
        // result.appendChild(h5)
        // const msg=document.createTextNode('Please provide Credentials')
        // h5.appendChild(msg)
    }


    try{
        const {data}=await axios.post('/users',{userId:nameValue, Password:passwordValue})
        const h5=document.createElement('h5')
        // h5.textContent=data.person
        // result.appendChild(h5)
           inputForUserId.value=""
           inputForUserPassword.value=""
    }
    catch(error)
    {
        console.error('Error:', error);
    }

})