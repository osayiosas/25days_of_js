const notesContainers = document.querySelector(".note_container");
const creatBtn = document.querySelector(".Btn");

let notes = document.querySelector(".input_box");

function showNotes() {
  notesContainers.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorages() {
  localStorage.setItem("notes", notesContainers.innerHTML);
}

creatBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input_box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "image/delete.png";
  notesContainers.appendChild(inputBox).appendChild(img);
});

notesContainers.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorages();

  }
   else if(e.target.tagName === "P") {
    notes = document.querySelectorAll(".input_box");
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateStorages();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
