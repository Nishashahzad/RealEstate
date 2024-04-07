//section1 home page

//slide

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const section = document.querySelector('#Home-page-section-1'); 
    const backgroundImages = ['./images/slider1.jpg', './images/slider2.jpg', './images/slider3.jpg']; 
    let isAnimating = false; 

    function goToSlide(index) {
       
        if (isAnimating) return;
        isAnimating = true;

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        currentSlide = index;
        
        section.style.backgroundImage = `url('${backgroundImages[currentSlide]}')`;
        section.classList.remove('zoom-out-effect'); 
        setTimeout(() => {
            section.classList.add('zoom-out-effect'); 
            isAnimating = false; 
        }, 50); 
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 3000); 

    section.style.backgroundSize = 'cover';
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundPosition = 'center';
    section.style.width = '100%';
    section.style.height = '100%';
});


/*cookie*/
document.addEventListener('DOMContentLoaded', function() {
    const cookieBox = document.getElementById('cookie-box');

    cookieBox.classList.remove('hidden');

    const cookieIcon = document.getElementById('cookie-icon');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    cookieIcon.addEventListener('click', function() {
        cookieBox.classList.toggle('hidden');
    });

    acceptBtn.addEventListener('click', function() {
        cookieBox.classList.add('hidden');
    });

    rejectBtn.addEventListener('click', function() {
        cookieBox.classList.add('hidden');
    });
});

//section 2 home page scrolling

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const reviewsSlider = document.querySelector('.reviews-slider');

    prevButton.addEventListener('click', function() {
        reviewsSlider.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        reviewsSlider.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    });
});
 

//read more or read less

document.addEventListener('DOMContentLoaded', function () {
    var readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var reviewContent = this.previousElementSibling; 
            reviewContent.classList.toggle('expand'); 
            if (this.textContent === 'Read less') {
                this.textContent = 'Read more';
            } else {
                this.textContent = 'Read less';
            }
        });
    });
});


/*section 3 home page*/
  // JavaScript function to filter categories
  function filterCategories(category) {
    var categories = document.querySelectorAll('.category');

    categories.forEach(function(cat) {
        var catType = cat.getAttribute('data-category');
        if (category === 'All' || catType === category) {
            cat.classList.remove('hidden');
        } else {
            cat.classList.add('hidden');
        }
    });
}

// JavaScript function to move categories left or right
function moveCategories(direction) {
    var categoriesContainer = document.querySelector('.category-slider');
    var scrollDistance = 300; 

    if (direction === 'left') {
        categoriesContainer.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        categoriesContainer.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        });
    }
}




