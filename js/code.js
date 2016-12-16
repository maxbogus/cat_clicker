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
    this.clickCount = ko.protectedObservable(data.clickCount);
    this.name = ko.protectedObservable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nicknames);

    this.commitAll = function () {
        this.name.commit();
        this.clickCount.commit();
    };
    this.resetAll = function () {
        this.name.reset();
        this.clickCount.reset();
    };

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

ko.protectedObservable = function (initialValue) {
    //private variables
    var _temp = initialValue;
    var _actual = ko.observable(initialValue);

    var result = ko.dependentObservable({
        read: _actual,
        write: function (newValue) {
            _temp = newValue;
        }
    }).extend({notify: "always"}); //needed in KO 3.0+ for reset, as computeds no longer notify when value is the same

    //commit the temporary value to our observable, if it is different
    result.commit = function () {
        if (_temp !== _actual()) {
            _actual(_temp);
        }
    };

    //notify subscribers to update their value with the original
    result.reset = function () {
        _actual.valueHasMutated();
        _temp = _actual();
    };

    return result;
};

var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);

    this.isAdminFormEnabled = ko.observable(false);

    this.showAdminForm = function () {
        var currentState = this.isAdminFormEnabled();
        if (currentState === true) {
            this.isAdminFormEnabled(false);
        } else {
            this.isAdminFormEnabled(true);
        }
    };

    this.selectCurrentCat = function () {
        self.currentCat(this);
    };

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem))
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        self.currentCat().clickCount.commit();
    };
};

ko.applyBindings(new ViewModel());