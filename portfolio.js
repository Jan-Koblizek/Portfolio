function blurAndDarkenBackground() {
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = 1;
}

function removeBackgroundBlur() {
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = 0;
}

function displayInfo(popupID) {
    blurAndDarkenBackground();
    var popup = document.getElementById(popupID);
    popup.style.visibility = "visible";
    popup.style.opacity = 1;
}

function hideInfo() {
    var popups = document.querySelectorAll(".popup");
    for (i=0; i<popups.length; i++) {
        popups[i].style.opacity = 0;
        popups[i].style.visibility = "hidden";
    }
    removeBackgroundBlur();
}