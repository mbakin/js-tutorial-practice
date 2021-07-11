// Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const watch = document.querySelector('.watch img');
const addToBag = document.querySelector('.addToBag button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes')


// Moving Animation Event
container.addEventListener("mousemove", (event) => {
  //console.log(event.pageX, event.pageY)  //---> Testing for mouse move coordinate

  // Split the screen dimensions in half to use the mouse movement in the center
  let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - event.pageY) / 20;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Add to Bag onClick

addToBag.onclick = ()=>{
  window.alert("Product added to cart")
};

// Animate In
container.addEventListener('mouseenter', event=>{
  card.style.transition= 'none';
  // Popout Effect
  title.style.transform = "translateZ(80px)"
  watch.style.transform = "translateZ(180px) rotateZ(-20deg)"
  addToBag.style.transform = "translateZ(25px)"
  description.style.transform = "translateZ(40px)"
  sizes.style.transform = "translateZ(25px)"
})

// Animate Out
container.addEventListener('mouseleave', event=>{
  card.style.transition = "all 0.4s ease"
  card.style.transform =`rotateY(0deg) rotateX(0deg)`
  // Popback
  title.style.transform = "translateZ(0px)"
  watch.style.transform = "translateZ(0px) rotateZ(0deg)"
  addToBag.style.transform = "translateZ(0px)"
  description.style.transform = "translateZ(0px)"
  sizes.style.transform = "translateZ(0px)"

})