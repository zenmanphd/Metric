const header = document.querySelector(.title);
const intro = document.querySelector(.rant);
const go = document.querySelector(.trigger);
go.addEventListener("click", function(){
header.classList.toggle("change");
});
