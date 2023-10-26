//logic for nav-bar button

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header=document.querySelector(".head");
const action=document.querySelector(".login-btn")
let f=1;

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


//puts requests

const fun = async () => {
    try {
        const response = await axios.post('/homeUser', { user: "hello" });
        const { currentUser } = response.data;
        console.log(currentUser);

        if(currentUser!="user")
        {
            action.innerHTML=`<a>Welcome ${currentUser}</a>`

        }


    } catch (error) {
        console.error("Error:", error);
    }
};
fun()
