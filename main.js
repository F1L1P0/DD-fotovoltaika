// when scrolling show/hide navbar
let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    // show navbar when scrolling up
    document.querySelector(".section-navbar").style.top = "0"
  } else {
    // hide navbar when scrolling down
    document.querySelector(".section-navbar").style.top = "-100px"
  }
  prevScrollpos = currentScrollPos
}
