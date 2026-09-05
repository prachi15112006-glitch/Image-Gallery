
let currentCategory = "all";
const cards = document.querySelectorAll(".image-card");

function filterImages(category) {
    currentCategory = category;
    applyFilters();
}

function searchImages() {

    applyFilters();
}

function applyFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value.toLowerCase().trim();

    let visibleImages = 0;


    cards.forEach(function(card) {

        // Get animal name
        const animalName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        // Check category
        const categoryMatch =
            currentCategory === "all" ||
            card.classList.contains(currentCategory);


        // Check search text
        const searchMatch =
            animalName.includes(searchText);


        // Show image
        if (categoryMatch && searchMatch) {

            card.style.display = "block";

            visibleImages++;

        }

        // Hide image
        else {
            card.style.display = "none";
        }
    });

    // Show / hide "No Results" message
    const noResults =
        document.getElementById("noResults");

    if (noResults) {
        if (visibleImages === 0) {
            noResults.style.display = "block";
        }
        else {
            noResults.style.display = "none";
        }
    }
}

function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    // Put clicked image inside lightbox
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    // Show lightbox
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
document.addEventListener("click", function(event) {
    const lightbox =  document.getElementById("lightbox");
    if (event.target === lightbox) {
        closeLightbox();
    }
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});
