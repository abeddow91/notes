function testCreateNewNotebook() {
  var notebook = new Notebook();
  notebook.create();
  assert.isTrue(notebook !== 'undefined');
}

testCreateNewNotebook();

function testAbbreviatedLinkOnPage() {
  document.getElementById("new_note").value = "I must remember to buy eggs at the ship."
  document.getElementById("input_form").click()
  var notes = document.getElementById("notes").innerHTML
  assert.isTrue(notes.indexOf("I must remember to b") !== -1)
}
testAbbreviatedLinkOnPage()

function testFullLinkOnPage() {

}
