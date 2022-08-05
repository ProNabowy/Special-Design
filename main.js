// Set Setting
let random;
let showBullets;

// Create function To responsive  Header to 

header();
function header() {
    // Selector Elements

    let list = document.querySelector("header .list");
    let mnue = document.querySelector("header i");
    let close = document.querySelectorAll("header i")[1];

    // Coverte calss when user click to close mnue

    if(window.innerWidth <= 768) {
        mnue.classList.add("show");
    }
    // create resize action to control icone

    window.addEventListener("resize" , _ => {
        if(window.innerWidth <= 768) {
            mnue.classList.add("show");
        }else {
            list.style.cssText = "top: -1000px ;";
            mnue.classList.remove("show");
            close.classList.remove("show");
        }
    });

    mnue.addEventListener("click" , _ => {
        list.style.cssText = "top: 0px ;";

        mnue.classList.add("hidden");

        close.classList.add("show");

        mnue.classList.remove("show");

    });
    // Coverte calss when user click to close mnue
    close.addEventListener("click" , _ => {
        list.style.cssText = "top: -1000px ;";

        close.classList.add("hidden");

        close.classList.remove("show");

        mnue.classList.add("show");
    });
};


// Create Function To add animation and Show Side-bar

sidebar();
function sidebar() {

    // Selector elements
    let sidebar = document.querySelector(".side-bar");
    let iconeParent = document.querySelector(".side-bar .icone");
    let icone = document.querySelector(".side-bar .icone i ");

    // add evenet when user click on icone

    icone.addEventListener("click" , _ => {
        sidebar.classList.toggle("active");
        icone.classList.toggle("active");
        iconeParent.classList.toggle("active");
    });

    // Set Colors To Spans

    let spans = document.querySelectorAll(".color-spans span");

    spans.forEach( span => {

        span.style.cssText += `background-color:${span.getAttribute("data-color")};`;
        
        span.onclick = function(e) {
            // remove active class From All Spans

            document.querySelectorAll(".color-spans span").forEach( span => span.classList.remove("active"));
            
            // set active class when user click on it
            
            span.classList.add("active");
        };

    });

};

// Create Function To Change BackGround Dynamic
function changeBackGround() {

    let section = document.querySelector("section.landing");
    let arrayOfImg = 
    [
    "./imges/one.avif", "./imges/two.avif" , "./imges/three.avif" ,
     "./imges/four.avif" , "./imges/five.avif" , "./imges/six.avif" ,
      "./imges/seven.avif" , "./imges/eight.avif","./imges/nine.avif",
       "./imges/ten.avif"
    ];

    let randomSequnce = arrayOfImg[Math.trunc(Math.random() * arrayOfImg.length)];

    // set background img

    section.style.cssText += `background-image: url(${randomSequnce});`;

}


// Create Function To Active Up Button

upBtn();
function upBtn() {

    let btn = document.querySelector(".btn");

    // active btn when user click

    btn.addEventListener("click" , _ => {

        window.scrollTo( { 
            left: 0 ,
            top: 0,
            behavior: "smooth",
        });

    });

    window.addEventListener("scroll" , _ => {

        if(window.scrollY >= 970) {
            btn.classList.add("apper");
        }else {
            btn.classList.remove("apper");
        };

    });

};


// Create Active Color

mainColor();

let html = document.querySelector("html");

function mainColor() {

    let spans = document.querySelectorAll(".side-bar .color-spans span");

    // Loop For Spans To Get A data-color

    spans.forEach( span => {

        span.addEventListener("click" , _ => {

            html.style.cssText = `--main-color:${span.getAttribute("data-color")}`;

            localStorageData(span);

        });

    });

};

// Create Fucntion To Set Data For LocalStorage

function localStorageData(elemnt) {

    localStorage.setItem("color" , elemnt.getAttribute("data-color"));

};


// Set Color If LocalStorage Have Data

checkForData();

function checkForData() {

    localStorage.getItem("color") ? html.style.cssText = `--main-color:${localStorage.getItem("color")}` : html.style.cssText = `--maincolor:#03A9F4`;

    localStorage.getItem("random") ? random = localStorage.getItem("random") : random = true;

    localStorage.getItem("bullets") ? showBullets = localStorage.getItem("bullets") : showBullets = true;

};

let counter = random == "true" || random == true ? setInterval(changeBackGround , 10000) : false;

// Create function To Make A random Background If User acssept to random it

function toggleRandom() {

    let btnAgree = document.querySelector(".side-bar .random .btns button");

    let btnRefuse = document.querySelectorAll(".side-bar .random .btns button")[1];

    btnAgree.addEventListener("click" , _ => {
        counter = setInterval(changeBackGround , 10000);

        random = true;

        localStorage.setItem("random" , random);
    });

    btnRefuse.addEventListener("click" , _ => {
        clearInterval(counter);

        random = false;
        
        localStorage.setItem("random" , random);

    });

};
toggleRandom();

// Create Function To Show Bullets

toggleBulltes();

function toggleBulltes() {

    let bullets = document.querySelector(".sections-icone");

    let btnAgree = document.querySelector(".bullets button");

    let btnRefuse = document.querySelectorAll(".bullets button")[1];
    
    btnAgree.addEventListener("click" , _ => {
        showBullets = true;

        bullets.classList.add("apperBulltes");

        // Set Data To LocalStorage

        localStorage.setItem("bullets" , showBullets);

    });
    btnRefuse.addEventListener("click" , _ => {
        showBullets = false;

        bullets.classList.remove("apperBulltes");

        // Set Data To LocalStorage

        localStorage.setItem("bullets" , showBullets);

    });
    localStorage.getItem("bullets") && showBullets == "true" ? bullets.classList.add("apperBulltes") : bullets.classList.remove("apperBulltes");
    
    if(!(localStorage.getItem("bullets"))) bullets.classList.add("apperBulltes");

};

// Create Function To Rseat Setting

resetBtn();
function resetBtn() {

    let btn = document.querySelector(".side-bar .options .btn");

    btn.addEventListener("click" , _ => {

        localStorage.clear();

        window.location.reload();

    });

};

// Set Keybord Setting


function keySe() {

    let setting = document.querySelector(".side-bar .icone i");
    let about = document.querySelector("header .list li a");
    let gallery = document.querySelectorAll("header .list li a")[2];
    let timeLine = document.querySelectorAll("header .list li a")[3];
    let features = document.querySelectorAll("header .list li a")[4];
    let teastmonials = document.querySelectorAll("header .list li a")[5];

    window.addEventListener("keyup" , e => {

        if(e.key == "S" || e.key == "s") setting.click();

        if(e.key == "A" || e.key == "a") about.click();

        if(e.key == "G" || e.key == "g" ) gallery.click();

        if(e.key == "T" || e.key == "t" ) timeLine.click();
        
        if(e.key == "F" || e.key == "f" ) features.click();

        if(e.key == "M" || e.key == "m" ) teastmonials.click();

    });

};
// Create function To check if user foucs on input or not

function checkKeys() {

    
    window.addEventListener("mousemove" , _  => {
        if(window.scrollY <= 3800) {
            keySe();
        }else {
            false;
        }
    });

};

checkKeys();