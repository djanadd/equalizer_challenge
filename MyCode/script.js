
//SCROLL EVENTS

window.addEventListener('scroll',function(e){

const target = document.querySelector(".phone");
const target2 = document.querySelector(".bg-pattern-1");
const target3 = document.querySelector(".first-line-title");
const target4 = document.querySelector(".second-line-title");
var scrolled = window.pageYOffset;

var rated = (scrolled) * 0.2;
var rated2 = (scrolled) * 0.1;
var rate2 = 100 - rated;
var rate3=rated/4;
var rate4=30/rated;


target.style.transform = 'translate3d(0px,'+rated2+'px,0px)';
target2.style.transform = 'rotate('+rate3+'deg)';
target2.style.right = -3*rated+'px';
target3.style.clipPath ='polygon(0  0, 100% 0, 100% '+rate2+'%, 0 '+rate2+'%)';
target4.style.transform ='translate('+rated+'px)';
target4.style.opacity = rate4;


    // target3.style.clipPath ='polygon(0  0, 100% 0, 100% 100%, 0 100%)';
    // target2.style.transform = 'translate(0px) rotate(0deg)';


});


//BUTTONS MODS

 var socials = document.getElementsByClassName("change-color");
for (let el of socials ){ 
el.addEventListener("mouseover",function(event){
    var path=el.childNodes[0].childNodes[0];
        path.setAttribute("fill",'#FFB964');
        })
el.addEventListener("mouseleave",function(event){
    var path=el.childNodes[0].childNodes[0];
    path.setAttribute("fill",'#333333');
        })
    }


