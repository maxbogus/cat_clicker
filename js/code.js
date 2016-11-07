var cats = [{
    'name': 'Alisa',
    'picture': 'img/cat_1.jpg',
    'clicks': 0
}, {
    'name': 'Boris',
    'picture': 'img/cat_2.jpg',
    'clicks': 0
}, {
    'name': 'Marusya and Teresa',
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

$('body').append('<div class="active"></div>');
$('div.active').append('<figure></figure>');
$('div.active figure').append('<img class="active" src="' + cats[0]['picture'] + '">');
$('div.active figure').append('<figcaption>Cat ' + cats[0]['name'] + '.Clicks: ' + '<span class="active">' + cats[0]['clicks'] + '</span></figcaption>');

$('body').append('<ul class="list"></ul>');

$('img.active').click(function (e) {
    cats[0]['clicks'] = cats[0]['clicks'] + 1;
    $('span.active').text(cats[0]['clicks']);
    console.log(cats[0]['clicks']);
});

for (len = cats.length, i = 0; i < len; i++) {
    $('ul.list').append('<li><figure></figure></li>');
    $('ul.list figure:last').append('<img width="100" src="' + cats[i]['picture'] + '">');
    $('ul.list figure:last').append('<figcaption>Cat ' + cats[i]['name'] + '.Clicks: ' + '<span">' + cats[i]['clicks'] + '</span></figcaption>');
}

// current cat
// 0. print [0] cat from array cats
// 1. print name
// 2. print image
// 3. print clicks
// 4. check if user clicked on current cat
// 5. updated current cat clicks

// list of cats
// 0. print list of cats from array of cats
// 1. highlight current cat. if any
// 2. check if user clicked on item from list of cats
// 3. replace current cat with selected cat

// // clear the screen for testing
// document.body.innerHTML = '';
//
// var nums = [1,2,3];
//
// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {
//
//     // This is the number we're on...
//     var num = nums[i];
//
//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;
//
//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));
//
//     document.body.appendChild(elem);
// };