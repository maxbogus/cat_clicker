$(function () {

    var model = {
        cats: [{
            name: "Alisa",
            picture: "img/cat_1.jpg",
            clicks: 0
        }, {
            name: "Boris",
            picture: "img/cat_2.jpg",
            clicks: 0
        }, {
            name: "Twins",
            picture: "img/cat_3.jpg",
            clicks: 0
        }, {
            name: "Ball",
            picture: "img/cat_4.jpg",
            clicks: 0
        }, {
            name: "Phillip",
            picture: "img/cat_5.jpg",
            clicks: 0
        }, {
            name: "Max",
            picture: "img/cat_6.jpg",
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
            catView.render();
        },
        getAdminType: function () {
            return model.adminMode;
        }
    };

    var catView = (function () {
        var $catName;
        var $catImage;
        var $catClicks;
        var currentCat;

        return {
            init: function () {
                $catName = $("#name");
                $catImage = $("#cat-img");
                $catClicks = $("#clicks");

                $catImage.on("click", function () {
                    octopus.incrementCounter();
                });

                this.render();
            }, render: function () {
                currentCat = octopus.getCurrent();
                $catClicks.text("Clicks: " + currentCat.clicks);
                $catImage.attr("src", currentCat.picture);
                $catName.text(currentCat.name);
            }
        };
    }());

    var menuView = (function () {
        var catList;

        return {
            init: function () {
                catList = document.getElementById("cat-list");

                this.render();
            },
            render: function () {
                var elem;
                // empty the cat list
                catList.innerHTML = "";

                // loop over the cats
                octopus.getCats().forEach(function (cat) {
                    // make a new cat list item and set its text
                    elem = document.createElement("li");
                    elem.textContent = cat.name;

                    // on click, setCurrentCat and render the catView
                    // (this uses our closure-in-a-loop trick to connect the value
                    //  of the cat variable to the click event function)
                    elem.addEventListener("click", (function (catCopy) {
                        return function () {
                            octopus.setCurrent(catCopy);
                            catView.render();
                            menuView.render();
                        };
                    })(cat));

                    // finally, add the element to the list
                    catList.appendChild(elem);
                });
            }
        };
    }());

    var adminView = (function () {
        var $adminButton;
        var $adminMenu;
        var $adminCancel;
        var $adminSubmit;
        var $inputText;
        var $inputImg;
        var $inputClick;
        var currentCat;

        return {
            init: function () {
                $adminButton = $('#admin_button');
                $adminMenu = $('#admin_menu');
                $adminCancel = $('#admin_cancel');
                $adminSubmit = $('#admin_submit');

                $inputText = $('input#text');
                $inputImg = $('input#img');
                $inputClick = $('input#click');

                currentCat = octopus.getCurrent();

                if (octopus.getAdminType() === false) {
                    this.hideMenu();
                }

                $adminButton.on("click", function () {
                    currentCat = octopus.getCurrent();
                    if ($adminMenu.is(":visible")) {
                        $adminMenu.hide();
                    } else {
                        $adminMenu.show();
                    }
                });

                $adminCancel.on("click", function () {
                    $adminMenu.hide();
                });

                $adminSubmit.on("click", function () {
                    currentCat = octopus.getCurrent();
                    currentCat.name = $inputText.val();
                    currentCat.img = $inputImg.val();
                    currentCat.clicks = $inputClick.val();
                    $adminMenu.hide();
                    catView.init();
                });

                this.render();
            }, render: function () {
                $inputText.attr('value', currentCat.name);
                $inputImg.attr('value', currentCat.picture);
                $inputClick.attr('value', currentCat.clicks);
            },
            hideMenu: function () {
                $adminMenu.hide();
            }
        };
    }());

    octopus.init();
});

/*
 required:
 TODO: Refresh values on Cancel
 TODO: Update or close admin panel on click on cat
 TODO: Update or close admin panel on click on cat_list
 optional:
 TODO: remake menuView to jQuery
 TODO: octopus should call render passing to it required data
 TODO: octopus should be subscribed to the events in vew
 TODO: one event listener on parent view of child li's
 */