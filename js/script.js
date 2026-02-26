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



// slider
  // const track = document.getElementById("track");
  // const slides = track.children;
  // const totalSlides = slides.length;

  // let currentIndex = 0;

  // function updateSlide() {
  //   track.style.transform = `translateX(-${currentIndex * 100}%)`;
  // }

  // document.getElementById("next").addEventListener("click", () => {
  //   currentIndex = (currentIndex + 1) % totalSlides;
  //   updateSlide();
  // });

  // document.getElementById("prev").addEventListener("click", () => {
  //   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  //   updateSlide();
  // });


// const slides = document.querySelector('.slides');
// const slideCount = document.querySelectorAll('.slide').length;

// let currentIndex = 0;

// function updateSlide() {
//   slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
// }

// document.querySelector('.next').addEventListener('click', () => {
//   if (currentIndex < slideCount - 1) {
//     currentIndex++;
//     updateSlide();
//   }
// });

// document.querySelector('.prev').addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlide();
//   }
// });

 const track = document.getElementById("track");
  const slides = track.children;
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
      updateSlide();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlide();
    }
  });




// popup
function openPopup(key) {
    const data = popupData[key];

    document.getElementById("popupTitle").innerText = data.title;

    const listElement = document.getElementById("popupList");
    listElement.innerHTML = ""; // reset list

    data.list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      listElement.appendChild(li);
    });

    document.getElementById("popup").hidden = false;
  }

function closePopup() {
  document.getElementById("popup").hidden = true;
}

// json

const popupData = {
    unpas: {
      title: "Pasundan University",
      desc: "IT Stuff | Internship",
      list: [
        "HTML, CSS, JavaScript",
        "PHP & Laravel",
        "REST API",
        "Responsive Design"
      ]
    },
    pemdes: {
      title: "Direktorat Jendra Bina Pemerintahan Desa",
      desc: "Computer Operation | Contract",
      list: [
        'Operate computer systems and software to process data.',
        'Enter, modify, and update data as needed.',
        'Monitor the registration process of Pamong Desa LMS participants.',
        'Identify and resolve technical issues that arise.',
        'Generate reports and statistics from the processed data.',
        'Coordinate with the team to ensure smooth work.',
        'Help maintain the software by testing the software, finding and reporting bugs.'
      ]
    },
    bsn: {
      title: "KLT BSN West Java",
      desc: "Fullstack Developer | Internship",
      list: [
        'Create a website to manage West Java UMKM data.',
        'Analyzed and developed solutions to problems faced collaboratively with the team.',
        'Successfully implemented creative and effective solutions to improve website functionality and support business needs.'
      ]
    }
  };