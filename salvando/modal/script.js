var btnModalOpen = document.querySelector('.trigger')
btnModalOpen.addEventListener("click", () =>{
    var element = document.querySelector(".modal");
    element.classList.add("show-modal");
})
var btnModalClose = document.querySelector('.close-button')
btnModalClose.addEventListener("click", () =>{
    var element = document.querySelector(".modal");
    element.classList.remove("show-modal");
})