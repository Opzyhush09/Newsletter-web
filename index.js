var openModalBtn = document.getElementById("openModal");
var modal = document.getElementById("myModal");
var closeModalBtn = document.getElementById("close");

console.log(closeModalBtn)

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'unset'
})  

