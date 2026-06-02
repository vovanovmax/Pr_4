// === Практичне завдання 2. Додаємо зміну картинок ===
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo1.png') {
        myImage.setAttribute('src', 'images/logo2.jpg');
    } else {
        myImage.setAttribute('src', 'images/logo1.png');
    }
}

// === Практичне завдання 3. Персоналізоване привітання ===
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'JavaScript is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'JavaScript is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}