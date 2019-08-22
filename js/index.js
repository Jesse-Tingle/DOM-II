// Your code goes here

window.addEventListener('resize', (event) => {
    console.log('Window resized');
});

let soundPlaying = false;

// plays audio when the page finishes loading
var sound = new Audio('sound.mp3');
sound.addEventListener('loadeddata', () => {
    sound.play();
    soundPlaying = true;
});

let body = document.querySelector('body');
//console.log(body);
body.addEventListener('click', function removeListener() {
    if (soundPlaying === true) {
        sound.pause();
        soundPlaying = false;
        body.style.backgroundColor = 'red';
    } else if (soundPlaying === false) {
        sound.play();
        soundPlaying = true;
        body.style.backgroundColor = 'white';
    }
});

// stops nav links from refreshing the page
let allLinks = document.querySelectorAll('a');
allLinks.forEach((element) => {
  element.addEventListener('click', (event) => {
      event.preventDefault();
  });

  // add underline to a tags in navbar
  element.addEventListener('focus', underline);
  function underline() {
      this.style.textDecoration = 'underline';
  }
});


// adds a background-color of yellow to the
// h1 tag in the header
let header = document.querySelector('.logo-heading');
header.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#FDE45B';
});

// increases the image size of the two images
// in the content section
let images = document.querySelectorAll('.img-content');
for (let image of images) {
    image.addEventListener('click', () => {
        image.style.width = '50%';
    });
};

// alerts a message notifying the user that 
// the text was coppied to the clipboard
let allText = document.querySelector('body');
allText.addEventListener('copy', () => {
    alert('Text was coppied!');
});

// change button text color to red on mousedown
let buttons = document.querySelectorAll('.btn');
for(let button of buttons) {
    button.addEventListener('mousedown', () => {
        button.style.color = 'red';
    }); 
};

// change button text color back to white when mouse
// is no longer hovering above the button
let buttonsLeave = document.querySelectorAll('.btn');
for(let buttonLeave of buttonsLeave) {
    buttonLeave.addEventListener('mouseleave', () => {
        buttonLeave.style.color = 'white';
    });
};

// changes the text color back to teal when the mouse pointer
// goes over the button
let buttonsHover = document.querySelectorAll('.btn');
for(let buttonHover of buttonsHover) {
    buttonHover.addEventListener('pointerover', () => {
        buttonHover.style.color = '#17A2B8';
    });
};



document.addEventListener('keydown', (event) => {
    if(event.key === 'j'){
        alert('The j key was pressed')
    };
});

let largeBoatImg = document.querySelector('.content-destination img');
largeBoatImg.addEventListener('dblclick', () => {
    largeBoatImg.style.width = '50%';
    largeBoatImg.style.display = 'flex';
    largeBoatImg.style.margin = '0 auto';
})