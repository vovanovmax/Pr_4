// === Практичне завдання 2. Додаємо зміну картинок ===
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    // logo1.webp -> image_0.png, logo2.jpg -> image_1.png
    if(mySrc === 'assets/img/1.webp') {
        myImage.setAttribute('src', 'assets/img/2.jpg');
    } else {
        myImage.setAttribute('src', 'assets/img/1.webp');
    }
}

// === Практичне завдання 3. Персоналізоване привітання ===
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Ласкаво просимо до Opera. Будь ласка, введіть своє ім\'я.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Ласкаво просимо до Opera, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Ласкаво просимо до Opera, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}