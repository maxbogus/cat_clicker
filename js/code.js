$(function () {

    var model = {
        init: function () {
            if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([{
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
                }]);
            }
            current = model.getCats()[0];
        },
        getCats: function () {
            return JSON.parse(localStorage.cats);
        },
        getCurrent: function () {
            return current;
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
            return model.current;
        }
    };

    var view = {
        init: function () {
            view.render();
            $('body').append('<div id="active"><figure><img src="'
                + current['picture'] + '"><figcaption><span id="name">Name: '
                + current['name'] + '</span><br> Clicks: <span id="clicks" class="active">'
                + current['clicks'] + '</span></figcaption></figure></div>');

            $('div#active').click(function (e) {
                current['clicks'] = current['clicks'] + 1;
                console.log(current['clicks']);
                $('span.active').text(current['clicks']);
            });
        },
        render: function () {
            octopus.getCats().forEach(function (cat) {
                var elem = document.createElement('div');
                elem.className = 'list';

                var clicks = $('<span>', {class: cat['name']});

                elem.textContent = cat['name'];

                elem.addEventListener('click', (function (catCopy) {
                    return function () {
                        current = catCopy;
                        $('div#active img').attr('src', current['picture']);
                        $('div#active span#clicks').text(current['clicks']);
                        $('div#active span#name').text(current['name']);
                        $("div#active").hide().fadeIn('fast');
                    };
                })(cat));

                document.body.appendChild(elem);

                clicks.appendTo($(elem));
            });
        }
    };

    octopus.init();
});

//TODO:
// 1. create render function in view
// 2. replace current cat in model
// 3. use current cat from model
// 4. use separate methods to create event listeners
// 5. use separate methods to create view elements.


//Reference:
// $(function () {
//
//     var model = {
//         init: function () {
//             if (!localStorage.notes) {
//                 localStorage.notes = JSON.stringify([]);
//             }
//         },
//         add: function (obj) {
//             var data = JSON.parse(localStorage.notes);
//             data.push(obj);
//             localStorage.notes = JSON.stringify(data);
//         },
//         getAllNotes: function () {
//             return JSON.parse(localStorage.notes);
//         }
//     };
//
//
//     var octopus = {
//         addNewNote: function (noteStr) {
//             model.add({
//                 content: noteStr,
//                 date: new Date().toLocaleDateString("en-US")
//             });
//             view.render();
//         },
//
//         getNotes: function () {
//             return model.getAllNotes().reverse();
//         },
//
//         init: function () {
//             model.init();
//             view.init();
//         }
//     };
//
//
//     var view = {
//         init: function () {
//             this.noteList = $('#notes');
//             var newNoteForm = $('#new-note-form');
//             var newNoteContent = $('#new-note-content');
//             newNoteForm.submit(function (e) {
//                 octopus.addNewNote(newNoteContent.val());
//                 newNoteContent.val('');
//                 e.preventDefault();
//             });
//             view.render();
//         },
//         render: function () {
//             var htmlStr = '';
//             octopus.getNotes().forEach(function (note) {
//                 console.log(note.date);
//                 htmlStr += '<li class="note"><span class="note-date">' + note.date + '</span>' +
//                     note.content +
//                     '</li>';
//             });
//             this.noteList.html(htmlStr);
//         }
//     };
//
//     octopus.init();
// });