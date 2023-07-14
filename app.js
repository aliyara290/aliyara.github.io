const menuBar = document.getElementById('menu-bar');
const show = document.querySelector('.links');
const hide = document.querySelector('#x-mark');
const navLinks = document.querySelectorAll('.links a');
menuBar.addEventListener('click', () => {
    show.classList.toggle('show')
})
hide.addEventListener('click', () => {
    if(show) {
        show.classList.remove('show')

    }
});
for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
                show.classList.remove('show')
        })
};
document.addEventListener('click', (event) => {
  if (!menuBar.contains(event.target) && !show.contains(event.target)) {
    show.classList.remove('show');
  }
});

// this is for the loading logo

window.onload = function() {
  var loadingPage = document.querySelector('.loader');
  var websiteContent = document.getElementById('website-content');

  setTimeout(function() {
    loadingPage.style.display = 'none';
    websiteContent.style.display = 'block';
  }, 3000);
};


// this is for show more projects 

const showBtn = document.querySelector('#show-more');
const hideCards = document.querySelectorAll('.hide-card');
const btnText = document.getElementById('show-more');
let isExpanded = false;
showBtn.addEventListener('click', () => {
    for(let i = 0; i < hideCards.length; i++) {
        hideCards[i].classList.toggle('hide-card')
        isExpanded = hideCards[i].classList.contains('hide-card');
        
            if (isExpanded) {
                btnText.innerHTML = 'Show more';
        
            } else {
                btnText.innerHTML = 'Show less';
            }
    }
})