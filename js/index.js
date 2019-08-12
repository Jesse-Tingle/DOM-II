// Your code goes here
let header = document.querySelector('h1');
document.addEventListener('mouseover', () => {
    header.style.backgroundColor = '#FDE45B';
})


let images = document.querySelectorAll('.img-content');
for (let image of images) {
    image.addEventListener('click', () => {
        image.style.width = '50%';
    })
}

let allText = document.querySelector('body');
document.addEventListener('copy', () => {
    alert('Text was coppied!');
})


// function logCopy(event) {
//     alert('Text was coppied!')
// }

// allText.onCopy = logCopy();