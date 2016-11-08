function runTestSuite(){
  function testCreateNewNotebook() {
    var notebook = new Notebook();
    assert.isTrue(notebook !== 'undefined');
  }

  function testAbbreviatedLinkOnPage() {
    document.getElementById("new_note").value = "I must remember to buy eggs at the ship."
    document.getElementById("input_form").click()
    var notes = document.getElementById("notes").innerHTML
    assert.isTrue(notes.indexOf("I must remember to b") !== -1)
  }

  function testAbbreviation() {
    var notebook = new Notebook();
    notebook.notes.push("shopping list: coffee,apples, flour, candles, meat");
    var note = notebook.notes[0];
    var abbrev = notebook.abbreviation(note);
  assert.isTrue(abbrev == 'shopping list: coffe');
  }

  function testCreateNote() {
    var notebook = new Notebook();
    var note = "shopping list: coffee,apples, flour, candles, meat";
    notebook.createNote("shopping list: coffee,apples, flour, candles, meat");
  assert.isTrue(notebook.notes[0] == "shopping list: coffee,apples, flour, candles, meat");
}

  testCreateNewNotebook();
  testAbbreviatedLinkOnPage();
  testAbbreviation();
  testCreateNote();


}

function fullNoteSuite(){
  function testLinkShowsFullNote(){
      document.getElementById("new_note").value = "I left my bike at the bus station."
      document.getElementById("input_form").click();
      document.getElementById("link_0").click();
      assert.isTrue(document.getElementById('note_text').innerHTML == notes.note[0])

    };
    // function saveNoteText(){
    //   var fullNote = document.getElementById('note_text').innerHTML
    // }
    // testLinkShowsFullNote(function(){
    //   console.log(assert.isTrue(document.getElementById('note_text').innerHTML == notes.note[0]))
    // });
};
