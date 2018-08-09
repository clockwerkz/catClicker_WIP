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
        count: 0,
        selected: false
    },
    {
        name: 'Sam',
        img: './img/cat02.jpg',
        count: 5,
        selected : false
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

const listView = (function(DOM_Element) {
    const listDisplay = DOM_Element;

    function init() {
        listDisplay.addEventListener("click", function(e) {
            octopus.newCatSelection(e.target.textContent);
        });
    }

    function render(cats) {
        listDisplay.innerHTML = '';
        cats.forEach(function(cat) {
            listDisplay.innerHTML += '<li class="cat_list_item '+(cat.selected ? 'cat_list_item--selected' : '')+'">'+cat.name+'</li>';
        });
    }

    return {
        init,
        render
    }

})(document.querySelector('.cat_list_ul'));


//Octopus
const octopus = (function() {
    selectedCat = model[0];
    
    function init() {
        listView.init();
        catView.init();
        newCatSelection(model[0].name);
    }

    function catWasClicked() {
        selectedCat.count++;
        catView.render(selectedCat);
    }

    function newCatSelection(name) {
        selectedCat.selected = false;
        selectedCat = model.find((cat) =>  cat.name === name);
        selectedCat.selected = true;
        listView.render(model);
        catView.render(selectedCat);
    }

    return {
        init,
        catWasClicked,
        newCatSelection
    }
})();

document.addEventListener('DOMContentLoaded', octopus.init);




