document.addEventListener("DOMContentLoaded", async () => {
  const addPhoto = async () => {
    const res = await fetch("https://picsum.photos/480");
    let photo;
    if (res.ok) {
      photo = await res.blob();
    }
    const img = document.createElement("img");
    img.src = URL.createObjectURL(photo);
    img.addEventListener("click", () => {
      img.parentNode.removeChild(img);
    });
    document.querySelector("#gallery").appendChild(img);
  };
  document.querySelector("#add-photo").addEventListener("click", addPhoto);
});
