// Image code ------------------------------------------------------- //

const gallery = document.querySelectorAll('.the-cool-pic');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('.big-image');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal (listens to all)
gallery.forEach(image => {
    image.addEventListener('click', openModal);
});

function openModal(e) {
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = "A cool picture.";

    modalImage.src = src;
    modalImage.alt = alt;

    console.log(modalImage.alt);

    modal.showModal();
    
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
// Menu ------------------------------------------------------- //

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

// When screen is small, and menu button exists
function toggleMenu() {
    menu.classList.toggle('hide');
}

btn.addEventListener('click', toggleMenu);

// For when screen width changes
function onScreenResize() {
    if (window.innerWidth > 700) {
        menu.classList.remove('hide');
    } 

    else {
        menu.classList.add('hide');
    }
}

onScreenResize();

window.addEventListener('resize', onScreenResize);

/*
    AI Disclaimer: 
    I used duck.ai to help guide me in debugging issues
    and guiding me in figuring out the menu. 
    W3Schools helped as well. 
    Copy/Paste was not used with the AI.
    All comments are made by humans. 
*/