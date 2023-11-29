let sliders = Array.from(document.querySelectorAll('.css-slider'))
let longestSliderLength = Math.max(...sliders.map(s => s.querySelectorAll('.css-slide').length))
let styles = document.head.appendChild(document.createElement('style'))
let body = document.querySelector("body")


// beda buttondan galadon aira-expanded tutib olingan
// funcsiya ichinda commeta olib qoyganlarim true false atadon 
// coomenta omin qoyganlarim asa scrollni toxtatib qoyadi agar navbar dagi rasponsiveda chiqada button bosilsa   ---burgaer menu---
function myFunction() {
  let x = document.getElementById("button").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
    document.body.classList.add("remove-scrolling"); 
    // x = "false"
  } else {
    document.body.classList.remove("remove-scrolling"); 
  // x = "true"
  }
  // document.getElementById("button").setAttribute("aria-expanded", x);
  }




styles.type = 'text/css';

for (let k = 0; k < longestSliderLength; k++) {
  styles.textContent += `.css-slider>input:nth-of-type(${k + 1}):checked{& ~.css-track .css-slide:nth-child(-n+${k}){margin-left:calc((-100% / var(--per-page)) + (var(--gap) / 2));opacity:0;}& ~.css-controls label:nth-child(${k + 1}){opacity:1}}`
}

sliders.forEach((slider, i) => {
  slider.dataset.sliderId = i

  let track = slider.querySelector('.css-track')
  let controls = slider.querySelector('.css-controls')
  let slides = Array.from(track.querySelectorAll('.css-slide'))
  
  slides.forEach((slide, j) => {
    slide.dataset.slideId = j

    let input = slider.insertBefore(document.createElement('input'), slider.firstChild)
    input.name = `cssSliderControl_${i}`
    input.type = 'radio'
    input.id = `cssSliderControl_${i}_${slides.length - j}`

    let label = controls.appendChild(document.createElement('label'))
    label.htmlFor = `cssSliderControl_${i}_${j + 1}`
    label.textContent = j + 1
  })
})