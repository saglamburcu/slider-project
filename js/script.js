let slider = document.querySelectorAll(".slider")
let nextBtn = document.querySelector("#nextBtn")
let prevBtn = document.querySelector("#prevBtn")

slider.forEach((element, index) => {
  element.style.left = `${index*100}%`;
})

let counter = 0;
nextBtn.addEventListener("click", function() {
  counter++
  buttons()
  if (counter >= slider.length) {
    counter = 0;
  } 

  slider.forEach((element) => {
    element.style.transform =`translateX(-${counter*100}%)`
  })
})

prevBtn.addEventListener("click", function() {
  counter--;
  buttons()
  if (counter < 0) {
    counter = slider.length -1 
  }

  slider.forEach((element) => {
    element.style.transform =`translateX(-${counter*100}%)`
  })
})

// BUTTONS
function buttons() {
  if (counter > 0) {
    prevBtn.style.display = "block"
  } else {
    prevBtn.style.display = "none"
  }

  if (counter == slider.length-1) {
    nextBtn.style.display = "none"
  } else {
    nextBtn.style.display = "block"
  }
}