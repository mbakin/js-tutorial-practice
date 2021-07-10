const btnCntrl = document.querySelector('.btn')
const boxes = document.querySelectorAll('.box')

let run = false

function getGeneratorColor(){
  let letters = "0123456789ABCDEF"
  let color = '#'
  for (let i=0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function start(){
  if (run) {
    boxes.forEach(color => {
      color.style.background = getGeneratorColor()
    });
    setTimeout(start, 500)
  }
}

btnCntrl.addEventListener("click", function (){
  btnCntrl.innerText = "STOP"
  if(run){
    run = false
    btnCntrl.innerText = "Change Color"
  }else{
    run = true
    start()
  }
})