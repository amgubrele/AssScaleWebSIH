//logic for nav-bar button

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header=document.querySelector(".head");
const action=document.querySelector(".login-btn")
let f=1;





const clicklisten=()=>{
    window.location.href = '/book/search';
}


const toggleNavbar=()=>{
    nav_header.classList.toggle('active')
    if(f==1)
    {
        section1.style.display="none"
        document.querySelector('.body').style.overflowY= "hidden";
        f=0;
    }//kljda
    else if(f==0)
    {
        section1.style.display="flex"
        document.querySelector('.body').style.overflowY= "scroll";
        f=1;
    }

}
mobile_nav.addEventListener('click',()=>toggleNavbar())

//

let name='user'
let type='student'
const sec2=document.querySelector('.section2')
sec2.style.display="none";
//puts requests

const fun = async () => {
    try {
        const response = await axios.post('/login/home/user', { user: "hello" });
        const {currentUser}= response.data;
        console.log(currentUser);
        

        if(currentUser.userId!="user")
        {
            action.innerHTML=`<a>Welcome ${currentUser.userId}</a>`
            name=currentUser.userId
            type=currentUser.userType

        }
        if(currentUser.userType=="reviewer")
        {
            sec2.style.display='block'
        }


    } catch (error) {
        console.error("Error:", error);
    }
};
fun()


//search book
const searchBtn=document.querySelector('.searchBtn')
const bookName=document.querySelector('.bookName')
const author=document.querySelector('.author')
const category=document.querySelector('category')

searchBtn.addEventListener('click',async(e)=>{
    e.preventDefault()

    
    const bookValue=bookName.value
    const authorValue=author.value

         console.log(bookValue,authorValue)
    try{
        const {data}=await axios.post('/saving/current/book',{bookName:bookValue, author:authorValue})
    
        console.log(data.success)
        window.location.href = '/singleBookServe'
        // if(data.success==false && data.empty==false)
        // {
        //     error.innerHTML=`incorrect user or Password`
        // }
        // else if(data.success==false &&  data.empty==true)
        // {
        //     error.innerHTML=`please provide credentials`
        // }
        // else
        // {
        //     window.location.href = '/';
        //     error.innerHTML=``
        //     btn.action='/'
        // }
        // // h5.textContent=data.person
        // // result.appendChild(h5)
           
    }
    catch(error)
    {
        console.error('Error:', error);
    }

    // inputForUserId.value=""
    // inputForUserPassword.value=""

})

//hiding features for student

