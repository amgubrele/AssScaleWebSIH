//logic for nav-bar button

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".head");
const action = document.querySelector(".login-btn");
let f = 1;

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  if (f == 1) {
    section1.style.display = "none";
    document.querySelector(".body").style.overflowY = "hidden";
    f = 0;
  } //kljda
  else if (f == 0) {
    section1.style.display = "flex";
    document.querySelector(".body").style.overflowY = "scroll";
    f = 1;
  }
};
mobile_nav.addEventListener("click", () => toggleNavbar());

//puts requests

const btnEvent = document.querySelector("#submit-btn");

btnEvent.addEventListener("click", () => {
  btnEvent.innerHTML = `Successfully Submited!`;
  btnEvent.style.color = "green";
  btnEvent.style.fontSize = "1.2em";
  btnEvent.style.backgroundColor = "rgba(0,0,0,0)";

  function recurringFunction() {
    console.log("This message will appear every 2000 milliseconds (2 seconds).");
  }
  
  const intervalId = setInterval(recurringFunction, 2000);
});

//-----> LOGIC FOR REVIEW FORM <-----//
