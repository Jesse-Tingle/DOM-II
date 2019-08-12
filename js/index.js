// Your code goes here

// adds a background-color of yellow to the
// h1 tag in the header
let header = document.querySelector('.logo-heading');
header.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#FDE45B';
})

// increases the image size of the two images
// in the content section
let images = document.querySelectorAll('.img-content');
for (let image of images) {
    image.addEventListener('click', () => {
        image.style.width = '50%';
    })
}

// alerts a message notifying the user that 
// the text was coppied to the clipboard
let allText = document.querySelector('body');
document.addEventListener('copy', () => {
    alert('Text was coppied!');
})

// change button text color to red on mousedown
let buttons = document.querySelectorAll('.btn');
for(let button of buttons) {
    button.addEventListener('mousedown', () => {
        button.style.color = 'red';
    }); 
}

// change button text color back to white when mouse
// is no longer hovering above the button
let buttonsLeave = document.querySelectorAll('.btn');
for(let buttonLeave of buttonsLeave) {
    buttonLeave.addEventListener('mouseleave', () => {
        buttonLeave.style.color = 'white';
    });
}