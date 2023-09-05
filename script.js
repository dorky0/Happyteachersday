var showButton = document.getElementById("showButton");
var hiddenDiv = document.getElementById("hiddenDiv");
var bbdiv = document.getElementById("showButton");

// Add a click event listener to the button
showButton.addEventListener("click", function () {
    // Check the current display style of the div
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        // If it's hidden, show the div
        hiddenDiv.style.display = "block";
        bbdiv.style.display = "none";
    } else {
        // If it's visible, hide the div
        hiddenDiv.style.display = "none";
    }
});