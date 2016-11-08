var cats = [{
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
}], len, i;

document.body.innerHTML = '';

for (len = cats.length, i = 0; i < len; i++) {
    var cat = cats[i];
    var elem = document.createElement('div');

    var img = $('<img />',
        {
            id: cat['name'],
            src: cat['picture'],
            width: 300
        });

    var clicks = $('<span>', {class: cat['name']});

    elem.textContent = cat['name'] + ' Clicks: ';

    elem.addEventListener('click', (function (catCopy) {
        return function () {
            catCopy['clicks'] = catCopy['clicks'] + 1;
            $('span.' + catCopy['name']).text(catCopy['clicks']);
            console.log(catCopy['clicks']);
        };
    })(cat));

    document.body.appendChild(elem);
    img.prependTo($(elem));
    clicks.appendTo($(elem));
}