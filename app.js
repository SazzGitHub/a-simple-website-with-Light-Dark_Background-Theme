'use strict'

const switcher = document.querySelector('.butn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Light Theme";
        this.title = "Applly Dark Theme!";
    }
    else {
        this.textContent = "Dark Theme";
        this.title = "Applly Light Theme!";
    }

    console.log('Current class Name: ' +className);

});