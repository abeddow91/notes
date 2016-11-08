function Notebook() {
this.notes = [];
 }



Notebook.prototype.abbreviation = function(note) {
   return note.slice(0,20);
};


Notebook.prototype.createNote = function(note) {
this.notes.push(note);
};
