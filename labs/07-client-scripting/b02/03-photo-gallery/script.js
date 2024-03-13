document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#add-photo").addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/id/${Math.ceil(
      Math.random() * 100
    )}/400/400`;
    img.addEventListener("click", () => {
      // document.querySelector("#gallery").removeChild(img);
      img.parentNode.removeChild(img);
    });
    document.querySelector("#gallery").appendChild(img);
  });
});
