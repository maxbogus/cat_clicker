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
                current['clicks'] = current['clicks'] + 1;
                console.log(current['clicks']);
                $('span.active').text(current['clicks']);
            });
        }, init: function () {
            view.render();
            $('body').append('<div id="active"><figure><img src="'
                + current['picture'] + '"><figcaption><span id="name">Name: '
                + current['name'] + '</span><br> Clicks: <span id="clicks" class="active">'
                + current['clicks'] + '</span></figcaption></figure></div>');
            this.activeDivEvent();
        },
        render: function () {
            octopus.getCats().forEach(function (cat) {
                var elem = document.createElement('div');
                elem.className = 'list';
                elem.textContent = cat['name'];

                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        current = catCopy;
                        $('div#active img').attr('src', current['picture']);
                        $('div#active span#clicks').text(current['clicks']);
                        $('div#active span#name').text(current['name']);
                        $('div#active').hide().fadeIn('fast');
                    };
                })(cat));

                document.body.appendChild(elem);
            });
        }
    };

    octopus.init();
});

//TODO: 1. draw interactions on paper
//TODO: 2. create and store view elements with jQuery
//TODO: 3. access cats and current with octopus
//TODO: 4. store and replace current with octopus
//TODO: 5. draw view elements with jQuery