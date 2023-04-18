// when scrolling show/hide navbar
let prevScrollpos = window.pageYOffset
let navbar = document.querySelector(".navbar")

window.onscroll = function () {
  let navbarHeight = window.getComputedStyle(navbar).height
  let currentScrollPos = window.pageYOffset
  if (window.innerWidth > 767) {
    if (prevScrollpos > currentScrollPos) {
      // show navbar when scrolling up
      document.querySelector(".section-navbar").style.top = "0"
    } else {
      // hide navbar when scrolling down
      document.querySelector(".section-navbar").style.top = `-${navbarHeight}`
    }
    prevScrollpos = currentScrollPos
  } else {
    document.querySelector(".section-navbar").style.top = "0"
  }
}
// scroll to the top
const scrollToTopBtn = document.getElementById("scrollToTop")
const logo = document.getElementById("scrollToTopLogo")

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})
logo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})
// changing data theme
const toggleSwitch = document.querySelector("#toggle-switch")

toggleSwitch.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const nextTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", nextTheme)
})
