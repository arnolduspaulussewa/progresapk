const images = [
  { src: "images/keluarga/k3.jpg", album: "keluarga" },
  { src: "images/keluarga/img2.jpg", album: "keluarga" },
  { src: "images/liburan/img3.jpg", album: "liburan" },
  { src: "images/liburan/img4.jpg", album: "liburan" },
];

function loadGallery(album = "all") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered =
    album === "all" ? images : images.filter((img) => img.album === album);

  filtered.forEach((img, index) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.dataset.album = img.album;

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = `Gambar ${index}`;
    image.onclick = () => openModal(img.src);

    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.innerText = "X";
    btn.onclick = (e) => {
      e.stopPropagation();
      div.remove();
    };

    div.appendChild(image);
    div.appendChild(btn);
    gallery.appendChild(div);
  });
}

function filterAlbum(album) {
  loadGallery(album);
}

function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onload = () => loadGallery();
