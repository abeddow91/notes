```
note = new Note (’This is the message that I want in here’)
expect(note).to be_truthy()
expect(note.abbreviation). to have_content(’This is the message’)
expect(note.fullText).to have_content(’This is the message that I want in here’)
```
