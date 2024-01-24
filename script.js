let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY + 1;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('open');
    });
});

// Get the <p> element
const aboutTextContent = document.getElementById('about-text-content');

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Check if the target element is in the viewport
        if (entry.isIntersecting) {
            // Start the animation when the element is in the viewport
            startTypingAnimation();
            // Stop observing to avoid unnecessary repetitions
            observer.unobserve(aboutTextContent);
        }
    });
});

// Observe the target element
observer.observe(aboutTextContent);

// Function to start the typewriter animation
function startTypingAnimation() {
    const aboutText = aboutTextContent.textContent;
    aboutTextContent.textContent = '';

    let index = 0;
    function typeText() {
        if (index < aboutText.length) {
            aboutTextContent.textContent += aboutText.charAt(index);
            index++;
            setTimeout(typeText, 30);
        }
    }

    // Start typing animation
    typeText();
}