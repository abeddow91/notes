var notebook = new Notebook();
refreshNotes();
makeUrlChangeShowNoteForCurrentPage();

function refreshNotes() {

  var result = ""
  for (var i = 0; i < notebook.notes.length; i++){
    result = result + "<a href='#" + notebook.notes[i] + "'>"+ notebook.abbreviation(notebook.notes[i])+"</a><br>   ";
  }
  document.getElementById("notes").innerHTML = result
};

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};
document.getElementById("input_form").addEventListener('click', function() {
  addNewNote()
});

function addNewNote() {
  //  notesarray.push(document.getElementById("new_note"))
  var alertText = document.getElementById("new_note").value
  notebook.notes.push(alertText)
  refreshNotes();
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function showNote(note) {
  document
  .getElementById("note_text")
  .innerHTML = note;
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};
