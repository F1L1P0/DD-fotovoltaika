//
const html = document.querySelector('html')
const logoImg = document.querySelector('#scrollToTopLogo > img')
const toggleSwitch = document.querySelector('#toggle-switch')

toggleSwitch.addEventListener('click', () => {
  if (html.getAttribute('data-theme') === 'dark') {
    logoImg.setAttribute('src', './images/DD-logo__light.svg')
  } else {
    logoImg.setAttribute('src', './images/DD-logo.svg')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  if (html.getAttribute('data-theme') === 'light') {
    logoImg.setAttribute('src', './images/DD-logo__light.svg')
  }
})

// when scrolling show/hide navbar
let prevScrollpos = window.pageYOffset
let navbar = document.querySelector('.navbar')

window.onscroll = function () {
  let navbarHeight = window.getComputedStyle(navbar).height
  let currentScrollPos = window.pageYOffset
  if (window.innerWidth > 767) {
    if (prevScrollpos > currentScrollPos) {
      // show navbar when scrolling up
      document.querySelector('.section-navbar').style.top = '0'
    } else {
      // hide navbar when scrolling down
      document.querySelector('.section-navbar').style.top = `-${navbarHeight}`
    }
    prevScrollpos = currentScrollPos
  } else {
    document.querySelector('.section-navbar').style.top = '0'
  }
}

//clicking anchor link in navbar collapses modal
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      var collapseElement = document.querySelector('.navbar-collapse')
      var bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: false,
      })
      bsCollapse.hide()
    })
  })
})

// changing color scheme and savind choice into localstorage
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
}

toggleSwitch.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', nextTheme)
  localStorage.setItem('theme', nextTheme)
})

//content face appearing

let firstHeading = document.getElementById('hero')

function isVisible(element) {
  let elementBox = element.getBoundingClientRect()
  let distanceFromTop = -200

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  } else {
    return false
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hidden')
  sectionList.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove('hidden')
      section.classList.add('shown')
    }
  })
}

document.addEventListener('scroll', scanDocument)

//gallery

var modal = document.getElementById('modal')
var closeButton = document.getElementsByClassName('gallery-close')[0]

var links = document.getElementsByClassName('gallery__modal__link')
var modalImage = document.getElementById('modal-image')

function openModal(imageSrc) {
  modal.style.display = 'block'
  modalImage.src = imageSrc
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modal.style.display = 'none'
  document.body.style.overflow = 'auto'
}

Array.from(links).forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault()
    openModal(this.href)
  })
})

closeButton.addEventListener('click', closeModal)

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    closeModal()
  }
})
