slidingOptions = document.getElementById("Slidingoptions");
menu = document.getElementById("menu");
totalContainer = document.getElementById("totalContainer");
remove = document.getElementById("remove");
overlay = document.getElementById("overlay");
menu.addEventListener("click", function() {
    slidingOptions.style.display = "block";
    document.body.style.overflow = "hidden";

});

remove.addEventListener("click", function() {
    slidingOptions.style.display = "none";
    document.body.style.overflow = "auto"; 

});