let searchbtn = document.querySelector("#search-btn");
let searchbar = document.querySelector(".search-bar-container");

let formbtn = document.querySelector("#login-btn");
let loginform = document.querySelector(".login-form-container");
let formclose = document.querySelector("#form-close");
let form = loginform.querySelector("form");
let email = form.querySelector("#email");
email.addEventListener("keyup", function () {
  var u_times = document.querySelector(".u_times");
  var u_check = document.querySelector(".u_check");
  if (email.value.length == 0 || email.value.length < 10) {
    email.style.border = "1px solid red";
    u_times.style.display = "block";
    u_check.style.display = "none";
    return false;
  } else {
    email.style.border = "1px solid green";
    u_times.style.display = "none";
    u_check.style.display = "block";
  }
});
let pass = form.querySelector("#pass");
pass.addEventListener("keyup", function () {
  var p_times = document.querySelector(".p_times");
  var p_check = document.querySelector(".p_check");
  if (pass.value.length == 0 || pass.value.length < 6) {
    pass.style.border = "1px solid red";
    p_times.style.display = "block";
    p_check.style.display = "none";
    return false;
  } else {
    pass.style.border = "1px solid green";
    p_times.style.display = "none";
    p_check.style.display = "block";
  }
});
function validate() {
  if (email.value == 0 || email.value.length < 11) {
    document.getElementById("error").innerHTML =
      "please fill the required fields!";
    return false;
  } else if (pass.value == 0 || pass.value.length < 8) {
    document.getElementById("error").innerHTML =
      "please fill the required fields!";
    return false;
  } else {
    alert("successuflly logged in");
  }
}
let menubar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

let videobtn = document.querySelectorAll(".vid-btn");

searchbtn.addEventListener("click", () => {
  searchbtn.classList.toggle("fa-times"); //law l8eet dehh 3lemt x msh htzhr w msh h3rf a3ml click//
  searchbar.classList.toggle("active"); //law l8eet deeh alform msh htzhr //
  loginform.classList.remove("active");
  CartItem.classList.remove("active");
});
/*
window.onscroll = () => {
    searchbtn.classList.remove("fa-times");
    searchbar.classList.remove("active");
    menubar.classList.remove("fa-times");
    navbar.classList.remove("active");
} //law nzlt bscroll koll dah hytl8y //
*/
formbtn.addEventListener("click", () => {
  //law l8etha w 3amlt click msh hytl33 form aslan //
  loginform.classList.add("active");
  document.getElementById("loginForm").classList.add("active"); ///////////// Added New
  CartItem.classList.remove("active");
  SearchForm.classList.remove("active");
});

let registerBtn = document.querySelector("#registerBtn"); ///////////// Added New

registerBtn.onclick = () => { ///////////// Added New
  document.querySelector("#loginForm").classList.remove("active"); ///////////// Added New
  document.querySelector("#registerForm").classList.add("active"); ///////////// Added New
};

let loginBtn = document.querySelector("#loginBtn"); ///////////// Added New

loginBtn.onclick = () => { ///////////// Added New
  document.querySelector("#loginForm").classList.add("active"); ///////////// Added New
  document.querySelector("#registerForm").classList.remove("active"); ///////////// Added New
};

formclose.addEventListener("click", () => {
  loginform.classList.remove("active"); //law l8tha w geet adoos 3la label al x msh hy5rog //
});
let CartItem = document.querySelector(".cart-items-container");

document.querySelector("#card-btn").onclick = () => {
  CartItem.classList.toggle("active");
  navbar.classList.remove("active");
  SearchForm.classList.remove("active");
};
/*
 cartitem.addEventListener("click", () =>{ 
  cartitemform.classList.toggle("active");
});
*/
menubar.addEventListener("click", () => {
  menubar.classList.toggle("fa-times");
  //lma adoos 3la nav bar ytl3ly menubar w links algowha bas alkalam dah feeh width mo3in //
  //law l8thaa lma adoos 3la x msh hy5rog */
  navbar.classList.toggle("active");
});
videobtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");

    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
// kol ma a3ml click 3la span  albackground btt8yr //

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
