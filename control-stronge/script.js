let getPlace = document.querySelector(".placeToShowReuslt");
let firstInput = document.querySelector(".firstInput");

let allbutton = document.querySelectorAll(".allBtn button");




allbutton.forEach((itmes) =>{
    itmes.addEventListener("click", (e) => {
        if (e.target.classList.contains("checkItmes")) {
            checkItems();
        }
        if (e.target.classList.contains("addItmes")) {
            addItmes();
        }
        if (e.target.classList.contains("deleteItmes")) {
            deleteItmes();
        }
        if (e.target.classList.contains("showItmes")) {
            showItmes();
        }

    })
});

function checkInput(){
    getPlace.innerHTML = `the input shoud't be empty `;

}
function checkItems(){
    if (firstInput.value !== '') {
        if (localStorage.getItem(firstInput.value)) {
            getPlace.innerHTML = `fount in local stronge name ${firstInput.value}`;
        }else{
            getPlace.innerHTML = `not fount in local stronge name ${firstInput.value}`;
        }
    }else{
        checkInput();
    }

}
function addItmes(){
    if (firstInput.value !== '') {
       localStorage.setItem(firstInput.value,'test');
       getPlace.innerHTML = `the local stronge name ${firstInput.value} it added in your system `
       firstInput.value = '';
        
    }else{
        checkInput();
    }

 }
 function deleteItmes(){
    if (firstInput.value !== '') {
        if (localStorage.getItem(firstInput.value)) {
            localStorage.removeItem(firstInput);
            getPlace.innerHTML = `the items in local stronge name ${firstInput.value} it deleted ` ;
            firstInput.value = '';
        }else{
            getPlace.innerHTML = `not fount in local stronge name ${firstInput.value}`;
        }
    }else{
        checkInput();
    }

 }
 function showItmes(){
    if (firstInput.value === '') {
     getPlace.innerHTML = `the input shoud't be empty `;
    }else{
     getPlace.innerHTML = `move to other step`
    }
 }