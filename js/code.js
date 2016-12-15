var Cat = function () {
    this.nickNames = ko.observableArray(['T-Bone', 'Fluffy', 'Warrior']);
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat_1.jpg');
    this.imgAttribution = ko.observable('none');

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
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());