function searchNotes(keyword){

return notes.filter(note =>
note.toLowerCase().includes(keyword.toLowerCase())
);

}
