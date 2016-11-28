$(function () {

    var model = {
        cats: [{
            name: 'Alisa',
            picture: 'img/cat_1.jpg',
            clicks: 0
        }, {
            name: 'Boris',
            picture: 'img/cat_2.jpg',
            clicks: 0
        }, {
            name: 'Twins',
            picture: 'img/cat_3.jpg',
            clicks: 0
        }, {
            name: 'Ball',
            picture: 'img/cat_4.jpg',
            clicks: 0
        }, {
            name: 'Phillip',
            picture: 'img/cat_5.jpg',
            clicks: 0
        }, {
            name: 'Max',
            picture: 'img/cat_6.jpg',
            clicks: 0
        }],
        current: null,
        adminMode: false
    };

    var octopus = {
        init: function () {
            model.current = model.cats[0];
            catView.init();
            menuView.init();
            adminView.init();
        },
        getCats: function () {
            return model.cats;
        },
        getCurrent: function () {
            return model.current;
        },
        setCurrent: function (obj) {
            model.current = obj;
        },
        incrementCounter: function () {
            model.current.clicks++;
            catView.render()
        },
        getAdminType: function () {
            return model.adminMode;
        },
        setAdminType: function (type) {
            model.adminMode = type;
        }
    };

    var catView = {
        init: function () {
            this.catName = $('#name');
            this.catImage = $('#cat-img');
            this.catClicks = $('#clicks');

            this.catImage.click(function () {
                octopus.incrementCounter();
            });

            catView.render();
        }, render: function () {
            var currentCat = octopus.getCurrent();
            this.catClicks.text('Clicks: ' + currentCat.clicks);
            this.catImage.attr('src', currentCat.picture);
            this.catName.text(currentCat.name);
        }
    };

    var menuView = {
        init: function () {
            catList = document.getElementById('cat-list');

            this.render();
        },
        render: function () {
            var elem;
            // empty the cat list
            catList.innerHTML = '';

            // loop over the cats
            octopus.getCats().forEach(function (cat) {
                // make a new cat list item and set its text
                elem = document.createElement('li');
                elem.textContent = cat.name;

                // on click, setCurrentCat and render the catView
                // (this uses our closure-in-a-loop trick to connect the value
                //  of the cat variable to the click event function)
                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        octopus.setCurrent(catCopy);
                        catView.render();
                    };
                })(cat));

                // finally, add the element to the list
                catList.appendChild(elem);
            });
        }
    };

    var adminView = {
        init: function () {
            adminButton = $('#admin_button');
            adminMenu = $('#admin_menu');
            adminCancel = $('#admin_cancel');
            adminSubmit = $('#admin_submit');

            inputText = $('input#text');
            inputImg = $('input#img');
            inputClick = $('input#click');

            this.render();
        },
        render: function () {
            if (octopus.getAdminType() === false) {
                this.hideMenu();
            }

            var currentCat = octopus.getCurrent();

            inputText.attr('value', currentCat['name']);
            inputImg.attr('value', currentCat['picture']);
            inputClick.attr('value', currentCat['clicks']);

            adminButton.click(function () {
                if (adminMenu.is(":visible")) {
                    adminMenu.hide();
                } else {
                    adminMenu.show();
                }
            });

            adminCancel.click(function () {
                adminMenu.hide();
            });

            adminSubmit.click(function () {
                currentCat['name'] = inputText.val();
                currentCat['img'] = inputImg.val();
                currentCat['clicks'] = inputClick.val();
                console.log(currentCat);
                octopus.setCurrent(currentCat);
                adminMenu.hide();
                catView.render();
            });
        },
        hideMenu: function () {
            adminMenu.hide();
        }
    };

    octopus.init();
});

/*
 required:
 TODO: Refresh values on Cancel
 TODO: Save current cat to cats
 TODO: Update or close admin panel on click on cat
 TODO: Update or close admin panel on click on cat_list
 optional:
 TODO: remake menuView to jQuery
 TODO: octopus should call render passing to it required data
 TODO: octopus should be subscribed to the events in vew
 TODO: one event listener on parent view of child li's
 desired:
 TODO: Add CSS rules so you could view app on mobile
 TODO: data could be stored in data-id instead of closure
 */