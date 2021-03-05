console.log('HW');

function Note() {
    this.id = 0;
    this.name = '';
    this.text = '';
}

const notesList = [];

function getNotes() {
    const notes = [];
    let noteOne = new Note()
    noteOne.id = 1;
    noteOne.name = 'Notes 1';
    noteOne.text = 'Text Notes 1';
    notes.push(noteOne);

    const nonteTwo = {
        id: 2,
        name: 'Notes 2',
        text: 'Text Notes 2'
    };
    notes.push(nonteTwo);

    let noteThree = {
        id: 3,
        name: 'Notes 3',
        text: 'Text Notes 3'
    };
    notes.push(noteThree);
    return notes
}

fillStartNotesListHtml();

function fillStartNotesListHtml() {
    const notes = getNotes();
    this.notesList = []; 
    this.notesList.push(...notes);
    refreshNotesListHtml();
}

function refreshNotesListHtml() {

    for (i = 0; i < this.notesList.length; i++) {
        var countup = this;
        var newNode = document.createElement('div');
        newNode.className = 'textNode news content';
        newNode.innerHTML = this.notesList[i].text;
        document.getElementById('bodyNones').appendChild(newNode);
    }
}




let notesTest =
    [
        {
            id: 1,
            name: 'Notes 1',
            text: 'Text Notes 1'
        },
        {
            id: 2,
            name: 'Notes 2',
            text: 'Text Notes 2'
        },
        {
            id: 3,
            name: 'Notes 3',
            text: 'Text Notes 3'
        }
    ]