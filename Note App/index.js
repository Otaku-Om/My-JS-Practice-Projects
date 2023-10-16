const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");


const localNotes = getNote();

localNotes.forEach(note => {
   const noteEl = createNote(note.id, note.content);   
   appEl.insertBefore(noteEl, btnEl);
});

function createNote(id, content){
   const noteEl = document.createElement("textarea");
   noteEl.classList.add("note");
   noteEl.placeholder = "Empty note";
   noteEl.value = content; 
   // console.log(typeof(noteEl));

   noteEl.addEventListener("input", () => {
      updateNote(id, noteEl.value);
   });

   noteEl.addEventListener("dblclick", () => {
      const warning = confirm("Do you want to delete this note?");
      if (warning) {
         deleteNote(id, noteEl);
      }
   });

   return noteEl;
}

function deleteNote(id, element){
   const notes = getNote().filter(note => id !== note.id);
   saveNote(notes);
   element.remove();
}

function updateNote(id, content){
   const notes = getNote();
   const target = notes.find(note => id === note.id);
   target.content = content;
   saveNote(notes);
}

function saveNote(notes){
   localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNote(){
   return JSON.parse(localStorage.getItem("note-app")) || [];
}


function addNote(){
   const notes = getNote();
   const noteObj = {
      id: Math.floor(Math.random() * 10000),
      content: ""
   };

   // console.log(noteObj);

   const noteEl = createNote(noteObj.id, noteObj.content);
   appEl.insertBefore(noteEl, btnEl);
   notes.push(noteObj);
   saveNote(notes);
}

btnEl.addEventListener("click", addNote);