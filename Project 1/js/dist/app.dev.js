"use strict";

console.log("welcome to notes app");
showNotes(); // user adds a note add to local storage

var addBTn = document.getElementById("addBtn"); // console.log(addBTn);

addBTn.addEventListener("click", function (e) {
  var addTxt = document.getElementById("addTxt");
  var addTitle = document.getElementById("addTitle");
  var notes = localStorage.getItem("notes");
  var titles = localStorage.getItem("titles");

  if (notes == null) {
    notesObj = [];
    titlesObj = [];
  } else {
    notesObj = JSON.parse(notes);
    titlesObj = JSON.parse(titles);
  }

  notesObj.push(addTxt.value);
  titlesObj.push(addTitle.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("titles", JSON.stringify(titlesObj));
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});

function showNotes() {
  var titles = localStorage.getItem("titles");
  var notes = localStorage.getItem("notes");

  if (notes == null) {
    titlesObj = [];
    notesObj = [];
  } else {
    titlesObj = JSON.parse(titles);
    notesObj = JSON.parse(notes);
  }

  var html = "";
  notesObj.forEach(function (element, index) {
    html += "\n        <div class=\"my-2 mx-2 cell\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">".concat(titlesObj[index], "</h5>\n                <p class=\"card-text\">").concat(element, "</p>\n                <button id = ").concat(index, " onclick = deleteNote(this.id) class=\"deleteBtn\">Delete</button>\n            </div>\n        </div>\n                ");
  });
  var notesElem = document.getElementById("notes");

  if (html.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = "<p>ADD SOME NOTES TO BE SHOWN HERE</p>";
  }
}

function deleteNote(index) {
  var titles = localStorage.getItem("titles");
  var notes = localStorage.getItem("notes");
  notesObj = JSON.parse(notes);
  titlesObj = JSON.parse(titles);
  notesObj.splice(index, 1);
  titlesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("titles", JSON.stringify(titlesObj));
  showNotes();
  var search = document.getElementById("searchTxt");
  search.value = "";
} // let deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.addEventListener("click",function(e){
//     deleteNote(index);
// });
// console.log(deleteBtn);


var search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  var inputVal = search.value; // console.log("input event fired",inputVal);
  // let noteCards = JSON.parse(localStorage.getItem("notes"));
  // let html = "";
  // Array.from(noteCards).forEach(function(element,index){
  //     noteText = element;
  //     if(noteText.includes(inputVal)){
  //         html += `
  //             <div class="my-2 mx-2 cell" style="width: 18rem;">
  //                 <div class="card-body">
  //                     <h5 class="card-title">Note ${index+1}</h5>
  //                     <p class="card-text">${noteText}</p>
  //                     <button id = ${index} onclick = deleteNote(this.id) class="deleteBtn">Delete</button>
  //                 </div>
  //             </div>
  //             `;
  //     }
  // }); 
  // let notesElem = document.getElementById("notes");
  // if(html.length!=0){
  //     notesElem.innerHTML = html;
  // }
  // else{
  //     notesElem.innerHTML = "<p>NO NOTE MATCHING</p>";
  // }

  var noteCard = document.getElementsByClassName("cell");
  Array.from(noteCard).forEach(function (element, index) {
    var cardText = element.getElementsByClassName("card-text")[0].innerText;
    var titleText = element.getElementsByClassName("card-title")[0].innerText;

    if (cardText.includes(inputVal) || titleText.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});