var initialCats = [
    {
        clickCount: 0,
        name: "Alisa",
        imgSrc: "img/cat_1.jpg",
        imgAttribution: "none",
        nicknames: ['T-Bone', 'Fluffy', 'Warrior']
    }, {
        clickCount: 0,
        name: "Boris",
        imgSrc: "img/cat_2.jpg",
        imgAttribution: "none",
        nicknames: ['Architect']
    }, {
        clickCount: 0,
        name: "Twins",
        imgSrc: "img/cat_3.jpg",
        imgAttribution: "none",
        nicknames: ['Killers']
    }, {
        clickCount: 0,
        name: "Ball",
        imgSrc: "img/cat_4.jpg",
        imgAttribution: "none",
        nicknames: ['Papper']
    }, {
        clickCount: 0,
        name: "Phillip",
        imgSrc: "img/cat_5.jpg",
        imgAttribution: "none",
        nicknames: ['Phil']
    }, {
        clickCount: 0,
        name: "Max",
        imgSrc: "img/cat_6.jpg",
        imgAttribution: "none",
        nicknames: ['ZZzzzzzZZZzzz']
    }];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nicknames);

    this.title = ko.pureComputed(function () {
        var title;
        var clicks;

        clicks = this.clickCount();

        if (clicks < 10) {
            title = "Newborn";
        } else if (clicks < 50) {
            title = "Infant";
        } else if (clicks < 100) {
            title = "Child";
        } else if (clicks < 200) {
            title = "Teen";
        } else if (clicks < 500) {
            title = "Adult";
        } else {
            title = "Ninja";
        }

        return title;
    }, this);
};

var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem))
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());