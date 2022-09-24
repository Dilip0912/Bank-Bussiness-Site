//Insert element
const header=document.querySelector(".header")
const message = document.createElement("div");
message.classList.add("cookies");
message.innerHTML = `We use cookies for improved functionality nad analytics. <button class="btn btn--close--cookies">Got it!<button>`;
header.append(message);

//Remove element
document.querySelector(".btn--close--cookies").addEventListener("click",function(){
    message.remove();
})


//Implementing smooth scrolling
const s1=document.querySelector("#section--1");
const btnscroll=document.querySelector(".learnmore");

btnscroll.addEventListener("click",function(e){
    const s1coordinates=s1.getBoundingClientRect();
    console.log(s1coordinates);
    
    console.log(e.target.getBoundingClientRect());

    console.log(window.pageXOffset,pageYOffset)  //current scroll

    console.log(document.documentElement.clientHeight,document.documentElement.clientWidth)  //height and width of the current screen

    // window.scrollTo(
    //     {
    //         left:s1coordinates.left+window.pageXOffset,
    //         top:s1coordinates.top+window.pageYOffset,
    //         behaviour:"smooth",
    //     });
    s1.scrollIntoView({behavior:"smooth"});
})

//Types of events and event handlers
// const h=document.querySelector("h1")
// // h.addEventListener('mouseenter',function(){
// //     alert("U r reading message");
// // })

// // By using addEventListener we can use mulitple event on one element and
// //  we can also delete the eventlistener.
// const alerth1=function(){
//     alert("U r reading")

//     h.removeEventListener('mouseenter',alerth1);
// }
// h.addEventListener('mouseenter',alerth1);   //we can delete the eventhandler in this way

// Event propagation
document.querySelectorAll(".navlist-link").forEach(element => {
    
    element.addEventListener("click",
    function(e){
        this.style.backgroundColor="lightgreen"
    }
)});
document.querySelector(".navbar").addEventListener("click",
    function(e){
        this.style.backgroundColor="lightblue"
    }
);

// page scrolling
// document.querySelectorAll(".navlist-link").forEach(function(ele){
//     ele.addEventListener("click",function(e){
//         e.preventDefault();
//         const id=this.getAttribute('href')
//         console.log(id)
//         // console.log(document.querySelector(id))
//         document.querySelector(id).scrollIntoView({behavior:"smooth"})
//     })
// });

//Event delegation 
document.querySelector(".navlist").addEventListener("click",function(e){
    e.preventDefault();

    if(e.target.classList.contains('navlist-link')){
        const id=e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:"smooth"});
    }
});