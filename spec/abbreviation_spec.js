
  function testAbbreviation() {
    var notebook = new Notebook();
    notebook.notes.push("shopping list: coffee,apples, flour, candles, meat");
    var note = notebook.notes[0];
    var abbrev = notebook.abbreviation(note);
  assert.isTrue(abbrev == 'shopping list: coffe');
}

testAbbreviation();

// function testNotebook() {
//   var notepad = new Notebook();
//   notepad.create();
//   assert.isTrue(notepad.pages == 5);
// }
