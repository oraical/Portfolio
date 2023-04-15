var items = document.querySelector(".items");
var navlist = document.querySelector(".nav-list");
var navLinks = document.querySelector(".nav-list li");

items.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})


let tablinks = document.getElementsByClassName("tab-links");
let tabcontaints = document.getElementsByClassName("tab-containts");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    
    for(tabcontaint of tabcontaints){
        tabcontaint.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


document.getElementById('destroyBtn').addEventListener('click', function() {
    // Add the 'destroy' class to the container element
    document.querySelector('body').classList.add('destroy');
  });
  