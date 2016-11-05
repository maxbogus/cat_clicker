$('#cat_image').click(function (e) {
    var number = $('#number').text();
    console.log(number);
    $('#number').text(parseInt(number) + 1);
});