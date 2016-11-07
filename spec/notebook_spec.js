function testCreateNewNotebook() {
  var notebook = new Notebook();
  notebook.create();
  assert.isTrue(notebook !== 'undefined');
}

testCreateNewNotebook();

function testNotebook() {
  var notepad = new Notebook();
  notepad.create();
  assert.isTrue(notepad.pages == 5);
}
