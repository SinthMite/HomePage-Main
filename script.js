slidingOptions = document.getElementById("Slidingoptions");
menu = document.getElementById("menu");
totalContainer = document.getElementById("totalContainer");
remove = document.getElementById("remove");
menu.addEventListener("click", function() {
    slidingOptions.style.display = "block";
    // Disable scrolling when menu is open
    document.body.style.overflow = "hidden";
});

remove.addEventListener("click", function() {
    slidingOptions.style.display = "none";
    // Enable scrolling when menu is closed
    document.body.style.overflow = "auto"; // You can adjust this to 'scroll' if you always want to show the scrollbar
});