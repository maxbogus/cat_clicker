var cat_1 = {
    'name': 'Alisa',
    'picture': 'img/cat_1.jpg',
    'clicks': '0'
};
var cat_2 = {
    'name': 'Boris',
    'picture': 'img/cat_1.jpg',
    'clicks': '0'
};
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