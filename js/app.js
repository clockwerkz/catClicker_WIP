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
    { name : 'Cleo',
    count : 0,
    altText : 'Kitten Cleo with her siblings',
    img : './img/cat01.jpg',
    selected : false},
    { name : 'Clyde',
    count : 0,
    altText : 'Clyde being lazy on the arm of a couch',
    img : './img/cat02.jpg',
    selected : false},
    { name : 'Bonnie',
    count : 0,
    altText : 'Bonnie looking up to see if it\'s snack time',
    img : './img/cat03.jpg',
    selected : false},
    { name : 'Max',
    count : 0,
    altText : 'Something catches Max\'s eye while on the street',
    img : './img/cat04.jpg',
    selected : false},
    { name : 'Noah',
    count : 0,
    altText : 'Noah playing with a string of yarn while on a plastic chair',
    img : './img/cat05.jpg',
    selected : false}
];


//View(s)
const catView = (function() {
    const catDisplay = document.querySelector('.entry-body');
    const adminBtn = document.querySelector('.admin-btn');
    const hiddenAdminElements = document.querySelectorAll('.hidden');
    const cancelBtn = document.querySelector('.cancel-btn');
    const catName = document.getElementById('cat-name');
    const catImg = document.getElementById('cat-img');
    const catAlt = document.getElementById('cat-alt-text');
    const catCount = document.getElementById('cat-click-count');
    const submitBtn = document.querySelector('.submit-btn');


    function init() {
        catDisplay.addEventListener("click", octopus.catWasClicked);
        adminBtn.addEventListener('click', _toggleAdminElements);
        cancelBtn.addEventListener('click', function(event){
            event.preventDefault();
            _toggleAdminElements();
        });
        submitBtn.addEventListener('click', function(event){
            event.preventDefault();
            octopus.changeSelectedCat(catName.value, catImg.value, catAlt.value, catCount.value);
        });
    }

    function render(cat) {
        catDisplay.innerHTML = `
            <img src='${cat.img}' class='cat-img' alt='${cat.altText}'/>
            <h2 class='cat-name'>${cat.name}</h2>
            </div> <!-- .entry-body -->
            <h2>Clicked: <span class="click-count">${cat.count}</span>
        `;
        _fillAdminForm(cat);
    }

    function _fillAdminForm(cat) {
        catName.value = cat.name;
        catImg.value = cat.img;
        catAlt.value = cat.altText;
        catCount.value = cat.count;
    }

    function _toggleAdminElements() {
        hiddenAdminElements.forEach((element)=> element.classList.toggle('hidden'));
    }


    return {
        init,
        render
    }
})();






const listView = (function(DOM_Element) {
    const listDisplay = DOM_Element;

    function init() {
        listDisplay.addEventListener('click', function(e) {
            octopus.updateCurrentCat(e.target.textContent);
        });
    }

    function render(cats) {
        listDisplay.innerHTML='';
        cats.forEach((cat)=> {
            listDisplay.innerHTML += '<li class="cat_list_item '+( cat.selected ? 'cat_list_item--selected':'')+'">'+cat.name+'</li>';
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
        selectedCat.selected = true;
        catView.init();
        listView.init();
        catView.render(selectedCat);
        listView.render(model);
    }

    function updateCurrentCat(name) {
        selectedCat.selected = false;
        selectedCat = model.find((cat) => {
            return cat.name === name;
        });
        selectedCat.selected = true;
        listView.render(model);
        catView.render(selectedCat);
    }

    function catWasClicked() {
        selectedCat.count++;
        catView.render(selectedCat);
    }

    function changeSelectedCat(name, img, altText, count) {
        selectedCat.name = name;
        selectedCat.img = img;
        selectedCat.altText = altText;
        selectedCat.count = count;
        catView.render(selectedCat);
        listView.render(model);

    }

    return {
        init,
        catWasClicked,
        updateCurrentCat,
        changeSelectedCat
    }
})();

document.addEventListener('DOMContentLoaded', octopus.init);