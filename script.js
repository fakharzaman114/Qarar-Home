// Function to toggle the navigation menu
function toggleMenu() {
    const menu = document.getElementById('navbar-default');
    menu.classList.toggle('hidden');
}


// Select elements
const container = document.getElementById('feature-container');
const scrollRight = document.getElementById('scroll-right');
const scrollLeft = document.getElementById('scroll-left');

// Scroll right
scrollRight.addEventListener('click', () => {
    container.scrollBy({
        left: 200, // Adjust scroll amount
        behavior: 'smooth'
    });
});

// Scroll left
scrollLeft.addEventListener('click', () => {
    container.scrollBy({
        left: -200, // Adjust scroll amount
        behavior: 'smooth'
    });
});

// Infinite scroll for small devices
container.addEventListener('scroll', () => {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
});




function showFullText(event) {
    event.preventDefault();
    document.getElementById('short-text').classList.add('hidden');
    document.getElementById('full-text').classList.remove('hidden');
}

function hideFullText(event) {
    event.preventDefault();
    document.getElementById('full-text').classList.add('hidden');
    document.getElementById('short-text').classList.remove('hidden');
}