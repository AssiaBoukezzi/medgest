const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalTriggers2 = document.querySelector(".modal-trigger2");


modalTriggers.forEach((trigger) => trigger.
addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active")
}
const assiaBtn = document.querySelector(".assia-btn")
assiaBtn.addEventListener("click",()=> {
    document.querySelector(".modal-container2").classList.toggle("active")

})

