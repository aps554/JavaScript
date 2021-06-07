console.log("welcome to notes app");
showNotes();

// user adds a note add to local storage

let addBTn = document.getElementById("addBtn");
// console.log(addBTn);

addBTn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    let titles = localStorage.getItem("titles");
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
})

function showNotes( ){
    let titles = localStorage.getItem("titles");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        titlesObj = [];
        notesObj = [];
    } else {
        titlesObj = JSON.parse(titles);
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index) {
        html += `
        <div class="my-2 mx-2 cell" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titlesObj[index]}</h5>
                <p class="card-text">${element}</p>
                <button id = ${index} onclick = deleteNote(this.id) class="deleteBtn">Delete</button>
            </div>
        </div>
                `;

    });

    let notesElem = document.getElementById("notes");
    if(html.length!=0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = "<p>ADD SOME NOTES TO BE SHOWN HERE</p>";
    }
}

function deleteNote(index){
    let titles = localStorage.getItem("titles");
    let notes = localStorage.getItem("notes");
    notesObj = JSON.parse(notes);
    titlesObj = JSON.parse(titles);
    notesObj.splice(index,1);
    titlesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("titles", JSON.stringify(titlesObj));
    showNotes();
    let search = document.getElementById("searchTxt");
    search.value = "";
}

// let deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.addEventListener("click",function(e){
//     deleteNote(index);
// });

// console.log(deleteBtn);



let search = document.getElementById("searchTxt");

search.addEventListener("input",function(){
    let inputVal = search.value;
    // console.log("input event fired",inputVal);
    
    
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

    let noteCard = document.getElementsByClassName("cell");
    Array.from(noteCard).forEach(function(element,index){
        let cardText = element.getElementsByClassName("card-text")[0].innerText;
        let titleText = element.getElementsByClassName("card-title")[0].innerText;
        if(cardText.includes(inputVal) || titleText.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    });

});