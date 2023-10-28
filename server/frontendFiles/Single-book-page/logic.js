const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header=document.querySelector(".head");
let f=1;

const toggleNavbar=()=>{
    nav_header.classList.toggle('active')
    if(f==1)
    {
        document.querySelector('.body').style.overflowY= "hidden";
        f=0;
    }
    else if(f==0)
    {
        document.querySelector('.body').style.overflowY= "scroll";
    }

}
mobile_nav.addEventListener('click',()=>toggleNavbar())