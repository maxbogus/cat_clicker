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
        current: null
    };

    var octopus = {
        init: function () {
            model.current = model.cats[0];
            catView.init();
            menuView.init();
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
        }
    };

    var catView = (function () {
        var $catName;
        var $catImage;
        var $catClicks;

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
                var currentCat = octopus.getCurrent();
                $catClicks.text("Clicks: " + currentCat.clicks);
                $catImage.attr("src", currentCat.picture);
                $catName.text(currentCat.name);
            }
        };
    }());

    var menuView = {
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
                    };
                })(cat));

                // finally, add the element to the list
                catList.appendChild(elem);
            });
        }
    };

    octopus.init();
});
