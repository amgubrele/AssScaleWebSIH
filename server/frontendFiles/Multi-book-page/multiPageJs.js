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
const container=document.querySelector('#allbooks')
const fun = async () => {
    try {
        const response = await axios.post('/saving/current/books/serve', { user: "hello" });
        const books=response.data
        console.log(books[0]);
       
        for(let i=0;i<books.length;++i)
        {
            console.log(i)
            const htmlContent = `
            <div id="elem">
                    <div class="left">
                        <img src="${books[i].link}" alt="">

                    </div>
                    <div class="right">
                        <h1>Title:${books[i].name}</h1>
                        <h3><strong>Author:</strong>${books[i].author}</h3>
                        <h3><strong>Publisher:</strong>${books[i].publisher}</h3>
                        <p>Discription:${books[i].des}</p>
                    </div>
                </div>
`



            const div = document.createElement('div');
            div.innerHTML = htmlContent;
            container.appendChild(div);
        }



    } catch (error) {
        console.error("Error:", error);
    }
};
fun()

