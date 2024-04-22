const galerieImages = document.getElementById("allImages");

// récupérer les information des iimages
let titre = "test";
let imgSource = "../img/img2-produit-frai.png";

let monImage = getImage(titre, imgSource);

galerieImages.innerHTML = monImage;

function getImage(titre, urlImage) {
  titre = sanitizeHtml(titre);
  urlImage = sanitizeHtml(urlImage);
  return `<div class="col p-3">
    <div class="img-card text-white">
      <img src="${urlImage}" class="rounded w-100" />
      <p class="titre-img">${titre}</p>
      <div class="action-image-buttons" data-show="admin">
        <button
          type="button"
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#EditionPhotoModal"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#DeletePhotoModal"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>`;
}
