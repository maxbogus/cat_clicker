var cats = [{
    'name': 'Alisa',
    'picture': 'img/cat_1.jpg',
    'clicks': '0'
}, {
    'name': 'Boris',
    'picture': 'img/cat_2.jpg',
    'clicks': '0'
}, {
    'name': 'Marusya and Teresa',
    'picture': 'img/cat_3.jpg',
    'clicks': '0'
}, {
    'name': 'Ball',
    'picture': 'img/cat_4.jpg',
    'clicks': '0'
}, {
    'name': 'Phillip',
    'picture': 'img/cat_5.jpg',
    'clicks': '0'
}];

$('#cat_image_1').click(function (e) {
    var number = $('#number_1').text();
    console.log(number);
    $('#number_1').text(parseInt(number) + 1);
});
$('#cat_image_2').click(function (e) {
    var number = $('#number_2').text();
    console.log(number);
    $('#number_2').text(parseInt(number) + 1);
});

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