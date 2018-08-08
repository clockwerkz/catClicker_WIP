/*
 * Udacity Front End Developer NanoDegree Program
 * 
 * Premium Cat Clicker Starter Files for Video Walk-Through
 * 
 * By Carlos Fins
 * 
 * https://github.com/clockwerkz
 * 
 * 
*/

//Model
const model = [
    {
        name: 'Rocky',
        img: './img/cat01.jpg',
        count: 0
    },
    {
        name: 'Sam',
        img: './img/cat02.jpg',
        count: 5
    }
];


//View(s)
const catView = (function() {
    const catDisplay = document.querySelector('.entry-body');
    
    function init() {
        catDisplay.addEventListener("click", octopus.catWasClicked);
    }

    function render(cat) {
        catDisplay.innerHTML = `
            <img src='${cat.img}' class='cat-img'/>
            <h2 class='cat-name'>${cat.name}</h2>
            </div> <!-- .entry-body -->
            <h2>Clicked: <span class="click-count">${cat.count}</span>
        `;
    }

    return {
        init,
        render
    }
})();


//Octopus
const octopus = (function() {
    selectedCat = model[0];
    
    function init() {
        catView.init();
        catView.render(selectedCat);
    }

    function catWasClicked() {
        selectedCat.count++;
        catView.render(selectedCat);
    }

    return {
        init,
        catWasClicked
    }
})();

document.addEventListener('DOMContentLoaded', octopus.init);




