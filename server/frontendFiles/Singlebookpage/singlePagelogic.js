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
const nam=document.querySelector('.name')
const aut=document.querySelector('.author')
const Pub=document.querySelector('.Publisher')
const dis=document.querySelector('.discription')
const img=document.querySelector('.image')

const fun = async () => {
    try {
        const response = await axios.post('/saving/current/book/serve', { user: "hello" });
        const book = response.data;
        console.log(book)

       nam.innerHTML=`${book.name}`;
       aut.innerHTML=`${book.author}`
       Pub.innerHTML=`${book.publisher}`
       dis.innerHTML=`${book.des}`
       img.innerHTML=`<img src="${book.link}" alt="">`
       
        

      

    } catch (error) {
        console.error("Error:", error);
    }
};
fun()
