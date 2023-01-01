let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementById("close");

btn.addEventListener("click",() =>{
    modal.style.display = "block";
});

span.addEventListener("click",() =>{
    modal.style.display = "none";
});

window.addEventListener("click",() =>{
    if (event.target == modal) {
        modal.style.display = "none";
      }
});