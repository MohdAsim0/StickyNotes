// Selecting Elements
const btn = document.querySelector("button");
const bg = document.querySelector("#bg");
const textColor = document.querySelector("#text");
const note = document.querySelector("textarea");
const rightDiv = document.querySelector(".right");
const allNotes = document.querySelector(".all-notes");

btn.addEventListener("click", createStickyNotes);

function createStickyNotes() {
  const text = note.value;
    
    if (text.trim().length === 0){
        alert("please add note ");
        return;
    }

  const stickyNotes = document.createElement("div");
  // stickyNotes.innerText=text; //jo bhi text area se mila wo stickynote div me daal do
  const textSpan = document.createElement("span");
  textSpan.innerText = text;
  //   textSpan.addEventListener("blur", makeEditableFalse);

  stickyNotes.append(textSpan);
  stickyNotes.classList.add("note");

  const editNote = document.createElement("span");
  editNote.classList.add("material-symbols-outlined", "edit");
  editNote.innerText = "edit";
  editNote.addEventListener("click", editStickyNote);
  stickyNotes.append(editNote);

  const cross = document.createElement("span");
  cross.innerHTML = "&times;";
  cross.classList.add("close");
  cross.addEventListener("click", removeStickyNotes);
  stickyNotes.append(cross);

  //  Adding colors in notes in right div
  stickyNotes.style.backgroundColor = bg.value;
  stickyNotes.style.color = textColor.value;

  allNotes.append(stickyNotes);
  note.value = "";
}

function removeStickyNotes(evt) {
  evt.target.parentElement.remove();
}

function editStickyNote(event) {
  event.target.parentNode.children[0].contentEditable = true;
  event.target.parentNode.children[0].focus();
  return event.target.parentNode.children[0].innerText.length;
}

// function makeEditableFalse(evt) {
//   evt.target.contentEditable = false;
// }
