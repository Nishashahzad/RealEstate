//section1 home page

//slide

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const section = document.querySelector('#Home-page-section-1'); 
    const backgroundImages = ['./images/slider1.jpg', './images/slider2.jpg', './images/slider3.jpg']; 
    let isAnimating = false;
    let currentSlide = 0;  // Initialize currentSlide

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

    // Initialize the first slide
    goToSlide(currentSlide);
});


//cookie
document.addEventListener('DOMContentLoaded', function() {
    const cookieBox = document.getElementById('cookie-box');
    const cookieIcon = document.getElementById('cookie-icon');
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');

    // Check if the cookie consent has already been accepted or rejected
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'accepted' || cookieConsent === 'rejected') {
        cookieBox.classList.add('hidden');
    } else {
        cookieBox.classList.remove('hidden');
    }

    cookieIcon.addEventListener('click', function() {
        cookieBox.classList.toggle('hidden');
    });

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBox.classList.add('hidden');
    });

    rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
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

//google map

function openInNewTab() {
    window.open('https://www.google.com/maps/place/Revo+Realty/@25.107904,55.178829,17z/data=!3m1!5s0x3e5f6889ed70705f:0x9f0147fb1df5bb8e!4m8!3m7!1s0x3e5f6b38d3fea2e1:0x6d0b37a225920ab8!8m2!3d25.107904!4d55.1788293!9m1!1b1!16s%2Fg%2F11rk905ncf?hl=en&entry=ttu', '_blank');
}



// JavaScript for modal behavior
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menuModal = document.getElementById('menu-modal');
    var closeModal = document.querySelector('.close');

    menuToggle.addEventListener('click', function () {
        menuModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        menuModal.style.display = 'none';
    });
});

//slide scroll

document.addEventListener('DOMContentLoaded', (event) => {
    let touchStartX = 0;
    let touchEndX = 0;
    const categoriesContainer = document.querySelector('.categories-container');
    const categorySlider = document.querySelector('.category-slider');

    const handleSwipe = () => {
        if (window.innerWidth <= 768) { // Apply only for mobile devices
            if (touchEndX < touchStartX) {
                // Swiped left
                categorySlider.scrollBy({ left: categorySlider.clientWidth, behavior: 'smooth' });
            }
            if (touchEndX > touchStartX) {
                // Swiped right
                categorySlider.scrollBy({ left: -categorySlider.clientWidth, behavior: 'smooth' });
            }
        }
    };

    categoriesContainer.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    categoriesContainer.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
});

//slide scroll


document.addEventListener('DOMContentLoaded', (event) => {
    let touchStartX = 0;
    let touchEndX = 0;
    const reviewsSliderContainer = document.querySelector('.reviews-slider-container');
    const reviewsSlider = document.querySelector('.reviews-slider');

    const handleSwipe = () => {
        if (window.innerWidth <= 768) { // Apply only for mobile devices
            if (touchEndX < touchStartX) {
                // Swiped left
                reviewsSlider.scrollBy({ left: reviewsSlider.clientWidth, behavior: 'smooth' });
            }
            if (touchEndX > touchStartX) {
                // Swiped right
                reviewsSlider.scrollBy({ left: -reviewsSlider.clientWidth, behavior: 'smooth' });
            }
        }
    };

    reviewsSliderContainer.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    reviewsSliderContainer.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });
});

// form

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Send the form data using fetch
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.querySelector('#form-message').style.display = 'block';
            this.reset(); // Clear the form
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
});


