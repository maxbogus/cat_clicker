var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat_1.jpg');
    this.imgAttribution = ko.observable('none');

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

    this.currentLevel = ko.pureComputed(function () {
        return this.clickCount() > 30 ? "Newborn" : "Infant";
    }, this);
};

ko.applyBindings(new ViewModel());