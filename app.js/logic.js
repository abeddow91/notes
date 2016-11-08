var notebook = new Notebook();
refreshNotes();
makeUrlChangeShowNoteForCurrentPage();

function refreshNotes() {

  var result = ""
  for (var i = 0; i < notebook.notes.length; i++){
    result = result + "<a href='#" + notebook.notes[i] +"' id='link_"+i +"'>" + notebook.abbreviation(notebook.notes[i])+"</a><br>   ";
  }
  document.getElementById("notes").innerHTML = result
};

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
  console.log('set up hash change handler')
};
document.getElementById("input_form").addEventListener('click', function() {
  addNewNote()
});

function addNewNote() {
  //  notesarray.push(document.getElementById("new_note"))
  var alertText = document.getElementById("new_note").value
  console.log('new note')
  notebook.notes.push(alertText)
  refreshNotes();
};

function showNoteForCurrentPage() {
  console.log('show note for current page')
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
