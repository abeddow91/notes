
  function testCreateNote() {
    var notebook = new Notebook();
    var note = "shopping list: coffee,apples, flour, candles, meat";
    notebook.createNote("shopping list: coffee,apples, flour, candles, meat");
  assert.isTrue(notebook.notes[0] == "shopping list: coffee,apples, flour, candles, meat");
}

  testCreateNote();
