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

// Event propagation: capturing and bubbling
// document.querySelectorAll(".navlist-link").forEach(element => {
    
//     element.addEventListener("click",
//     function(e){
//         this.style.backgroundColor="lightgreen"
//     }
// )});
// document.querySelector(".navbar").addEventListener("click",
//     function(e){
//         this.style.backgroundColor="lightblue"
//     }
// );

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

//Dom Traversing
//Querselector selects child node whereas closest selects parent node
//Going downward: child
const h1=document.querySelector("h1");
console.log(h1.querySelector(".intro--mainheading--design"));
console.log(h1.children);
h1.firstElementChild.style.color="lightblue";
h1.lastElementChild.style.color="grey";

//Going upward: parent
console.log(h1.parentNode);
console.log(h1.parentElement);
// h1.closest("header").style.backgroundColor="brown";

//Going sideways:siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);


// Building a tabbed component
const optbtn=document.querySelectorAll(".operations_btn")
const optbtncontainer=document.querySelector(".operations--button")
const optcon=document.querySelectorAll(".operations_operation");

optbtncontainer.addEventListener("click",function(e){
    const click=e.target.closest(".operations_btn")
    
    //Guard clause
    if(!click) return;

    //Remove active classes
    optbtn.forEach(t=> t.classList.remove("operations_btn--active"));
    optcon.forEach(c=> c.classList.remove("operations_operation--active"));
    
    //Active btn
    click.classList.add("operations_btn--active")
    document.querySelector(`.operations_operation--${click.dataset.tab}`).classList.add("operations_operation--active");   
});


//
const nav=document.querySelector(".navbar")
nav.addEventListener("mouseover",function(e){
    if(e.target.classList.contains("navlist-link")){
        const link=e.target;
        const siblings=link.closest(".navbar").querySelectorAll(".navlist-link")
        const logo=link.closest(".navbar").querySelector('img');

        siblings.forEach(elements=> elements.style.opacity=0.5)
        logo.style.opacity=0.5;
        link.style.opacity=1;
    }
});
nav.addEventListener("mouseout",function(e){
    if(e.target.classList.contains("navlist-link")){
        const link=e.target;
        const siblings=link.closest(".navbar").querySelectorAll(".navlist-link")
        const logo=link.closest(".navbar").querySelector('img');

        siblings.forEach(elements=> elements.style.opacity=1)
        logo.style.opacity=1;
        link.style.opacity=1;
    }
});