// const mobile_nav=document.querySelector(".mobile-navbar-btn");
// const nav_header=document.querySelector(".head");
// let f=1;

// const toggleNavbar=()=>{
//     nav_header.classList.toggle('active')
//     if(f==1)
//     {
//         document.querySelector('.body').style.overflowY= "hidden";
//         f=0;
//     }
//     else if(f==0)
//     {
//         document.querySelector('.body').style.overflowY= "scroll";
//     }

// }
// mobile_nav.addEventListener('click',()=>toggleNavbar())


//================================


// const bookName=document.querySelector(".bookName");
// const author=document.querySelector(".author")
const name=document.querySelector('.bookName')
const auth=document.querySelector('.author')
const fun = async () => {
    try {
        const response = await axios.post('/saving/current/book/serve', { user: "hello" });
        const book = response.data;
        console.log(book)

       name.innerHTML=`BOOK TITLE: ${book.name}`;
       auth.innerHTML=`AUTHOR: ${book.author}`
       
        

      

    } catch (error) {
        console.error("Error:", error);
    }
};
fun()
