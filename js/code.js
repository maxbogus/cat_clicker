$(function () {

    var model = {
        init: function () {
            cats = [{
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
            }];
            current = cats[0];
        },
        getCats: function () {
            return cats;
        },
        getCurrent: function () {
            return current;
        },
        setCurrent: function (obj) {
            current = obj;
        }
    };

    var octopus = {
        init: function () {
            model.init();
            view.init();
        },
        getCats: function () {
            return model.getCats();
        },
        getCurrent: function () {
            return model.getCurrent();
        },
        setCurrent: function (obj) {
            model.setCurrent(obj);
        }
    };

    var view = {
        activeDivEvent: function () {
            $('div#active').click(function () {
                var currentCat = octopus.getCurrent();
                currentCat['clicks'] = currentCat['clicks'] + 1;
                console.log(currentCat['clicks']);
                $('span.active').text(currentCat['clicks']);
                octopus.setCurrent(currentCat);
            });
        }, init: function () {
            view.render();
            var currentCat = octopus.getCurrent();
            $('body').append('<div id="active"><figure><img src="'
                + currentCat['picture'] + '"><figcaption><span id="name">Name: '
                + currentCat['name'] + '</span><br> Clicks: <span id="clicks" class="active">'
                + currentCat['clicks'] + '</span></figcaption></figure></div>');
            this.activeDivEvent();
        },
        render: function () {
            octopus.getCats().forEach(function (cat) {
                var elem = document.createElement('div');
                elem.className = 'list';
                elem.textContent = cat['name'];

                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        octopus.setCurrent(catCopy);
                        var currentCat = octopus.getCurrent();
                        $('div#active img').attr('src', currentCat['picture']);
                        $('div#active span#clicks').text(currentCat['clicks']);
                        $('div#active span#name').text(currentCat['name']);
                        $('div#active').hide().fadeIn('fast');
                    };
                })(cat));

                document.body.appendChild(elem);
            });
        }
    };

    octopus.init();
});