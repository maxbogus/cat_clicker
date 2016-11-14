$(function () {

    var model = {
        init: function () {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([{
                    'name': 'Alisa',
                    'picture': 'img/cat_1.jpg',
                    'clicks': 0
                }, {
                    'name': 'Boris',
                    'picture': 'img/cat_2.jpg',
                    'clicks': 0
                }, {
                    'name': 'Twins',
                    'picture': 'img/cat_3.jpg',
                    'clicks': 0
                }, {
                    'name': 'Ball',
                    'picture': 'img/cat_4.jpg',
                    'clicks': 0
                }, {
                    'name': 'Phillip',
                    'picture': 'img/cat_5.jpg',
                    'clicks': 0
                }, {
                    'name': 'Max',
                    'picture': 'img/cat_6.jpg',
                    'clicks': 0
                }]);
            }
        }
    };

    var octopus = {
        init: function () {
            model.init();
        }
    };

    octopus.init();
});

current = localStorage.cats[0];

JSON.parse(localStorage.cats).forEach(function (cat) {
    var elem = document.createElement('div');
    elem.className = 'list';

    var clicks = $('<span>', {class: cat['name']});

    elem.textContent = cat['name'];

    elem.addEventListener('click', (function (catCopy) {
        return function () {
            current = catCopy;
            console.log(catCopy);
            $('div#active img').attr('src', current['picture']);
            $('div#active span#clicks').text(current['clicks']);
            $('div#active span#name').text(current['name']);
            console.log(catCopy['clicks']);
            $("div#active").hide().fadeIn('fast');
        };
    })(cat));

    document.body.appendChild(elem);

    clicks.appendTo($(elem));
});

$('body').append('<div id="active"><figure><img src="'
    + current['picture'] + '"><figcaption><span id="name">Name: '
    + current['name'] + '</span><br> Clicks: <span id="clicks" class="active">'
    + current['clicks'] + '</span></figcaption></figure></div>');

$('div#active').click(function (e) {
    current['clicks'] = current['clicks'] + 1;
    console.log(current['clicks']);
    $('span.active').text(current['clicks']);
});

//TODO:
// 1. separate model, controls and view:
// b. view - controls and clicks, render
// c. octopus - init, interaction between view and model
// 2. move everything to correct parts of mvc

// Project Requirements for Cat Clicker Premium
// Visuals
//The application should display
// a list of cats by name
// an area to display the selected cat

// In the cat display area, the following should be displayed
// the cat's name
// a picture of the cat
// text showing the number of clicks

// The specifics of the layout do not matter, so style it however you'd like.
// Interaction
// When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
//    The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
