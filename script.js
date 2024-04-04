//section1 home page

//slide

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const section = document.querySelector('#Home-page-section-1'); // Select the section containing the slider
    const backgroundImages = ['./images/slider1.jpg', './images/slider2.jpg', './images/slider3.jpg']; // Replace with your background image URLs
    let currentSlide = 0;
    let isAnimating = false; // Flag to prevent multiple animations

    function goToSlide(index) {
        // Prevent animation if already animating
        if (isAnimating) return;
        isAnimating = true;

        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        currentSlide = index;
        
        // Change background image based on the current slide
        section.style.backgroundImage = `url('${backgroundImages[currentSlide]}')`;
        section.classList.remove('zoom-out-effect'); // Remove zoom-out effect class
        setTimeout(() => {
            section.classList.add('zoom-out-effect'); // Add zoom-out effect class after a short delay
            isAnimating = false; // Reset animation flag
        }, 50); // Adjust the delay as needed for the animation to reset properly
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 3000); // Change slide every 2 seconds

    // Set initial background image size to cover the entire section
    section.style.backgroundSize = 'cover';
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundPosition = 'center';
    section.style.width = '100%';
    section.style.height = '100%';
});


/*cookie*/
document.addEventListener('DOMContentLoaded', function() {
    const cookieBox = document.getElementById('cookie-box');

    // Show the cookie box when the DOM content is loaded
    cookieBox.classList.remove('hidden');

    const cookieIcon = document.getElementById('cookie-icon');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    cookieIcon.addEventListener('click', function() {
        cookieBox.classList.toggle('hidden');
    });

    acceptBtn.addEventListener('click', function() {
        // Add code to set cookie to accept
        cookieBox.classList.add('hidden');
    });

    rejectBtn.addEventListener('click', function() {
        // Add code to handle rejection, for example, disable some features
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
            left: -300, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        reviewsSlider.scrollBy({
            left: 300, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });
});
 

//read more or read less

document.addEventListener('DOMContentLoaded', function () {
    var readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var reviewContent = this.previousElementSibling; // Get the review content element
            reviewContent.classList.toggle('expand'); // Toggle expand class
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
    var scrollDistance = 300; // Adjust as needed

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



