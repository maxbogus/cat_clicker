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

current = cats[0];

for (len = cats.length, i = 0; i < len; i++) {
    var cat = cats[i];
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
}

$('body').append('<div id="active"><figure><img src="'
    + current['picture'] + '"><figcaption><span id="name">Name: '
    + current['name'] + '</span><br> Clicks: <span id="clicks" class="active">'
    + current['clicks'] + '</span></figcaption></figure></div>');

$('div#active').click(function (e) {
    current['clicks'] = current['clicks'] + 1;
    console.log(current['clicks']);
    $('span.active').text(current['clicks']);
});