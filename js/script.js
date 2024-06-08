// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger'); 
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});

// Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvVMQoEIeeWH6YtcsVQ7QIm4X3RqRHa2QazPj9p2RLQO1Fm9xPZp3sp4YH8f6ZDqcmgw/exec'
const form = document.forms['fajri-khoirunnisa-contact-form']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')
const btnClose = document.querySelector('.btn-close')

form.addEventListener('submit', e => {
  e.preventDefault()

  btnLoading.classList.toggle('hidden')
  btnKirim.classList.toggle('hidden')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        btnLoading.classList.toggle('hidden')
        btnKirim.classList.toggle('hidden')
        
        myAlert.classList.toggle('hidden')

        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

btnClose.addEventListener('click', function() {
    myAlert.classList.toggle('hidden');
});

