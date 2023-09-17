const galleryItemClass = "gallery-item";
const galleryImageClass = "gallery-image";
const galleryId = "gallery-modal";
const galleryContentClass = "gallery-content";
const captionID = "caption";
const galleryImagesAttribute = "data-galleryImages";

function openModal() {
    document.getElementById(galleryId).style.display = "block";
}

// Close the Modal
function closeModal() {
    var slides = document.getElementsByClassName(galleryItemClass);
    var captionText = document.getElementById(captionID);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    document.getElementById(galleryId).style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function showSlide(n, objekt) {
    images = objekt.getAttribute(galleryImagesAttribute).split(';');
    var slides = document.getElementsByClassName(galleryItemClass);
    for (i=slides.length-1; i >= 0; i--) {
        slides.item(i).remove();
    }
    images.forEach(image => {
        var galleryItem = document.createElement("div");
        galleryItem.classList.add(galleryItemClass)
        var galleryImage = document.createElement("img");
        galleryImage.classList.add(galleryImageClass);
        galleryImage.src = image;
        galleryItem.appendChild(galleryImage);
        document.getElementById(galleryId).getElementsByClassName(galleryContentClass)[0].appendChild(galleryItem);
    });
    openModal();
    showSlides(slideIndex = n);
}

function showSlides(startSlideID) {
    var i;
    var slides = document.getElementsByClassName(galleryItemClass);

    if (startSlideID > slides.length) {slideIndex = 1;}
    if (startSlideID < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}