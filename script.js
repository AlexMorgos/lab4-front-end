const n = 6;
const k = (n % 10) + 1;

function toggleColors(el) {
  if (el.dataset.active !== "1") {
    el.style.backgroundColor = "#222";
    el.style.color = "#fff";
    el.dataset.active = "1";
  } else {
    el.style.backgroundColor = "";
    el.style.color = "";
    el.dataset.active = "0";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const first = document.getElementById(`box-${k}`);
  const second = document.querySelector(`#box-${k + 1}`);

  if (first) {
    first.addEventListener("click", () => toggleColors(first));
  }

  if (second) {
    second.addEventListener("click", () => toggleColors(second));
  }

  const container = document.getElementById("imageContainer");

  document.getElementById("btnAdd").onclick = () => {
    if (document.getElementById("photo")) return;

    const img = document.createElement("img");
    img.id = "photo";
    img.src = "./assets/vienna.jpg";
    img.style.width = "400px";
    container.appendChild(img);
  };

  document.getElementById("btnDelete").onclick = () => {
    const img = document.getElementById("photo");
    if (img) img.remove();
  };

  document.getElementById("btnPlus").onclick = () => {
    const img = document.getElementById("photo");
    if (!img) return;

    img.style.width = (parseInt(img.style.width) + 40) + "px";
  };

  document.getElementById("btnMinus").onclick = () => {
    const img = document.getElementById("photo");
    if (!img) return;

    const w = parseInt(img.style.width) - 40;
    if (w >= 120) img.style.width = w + "px";
  };
});
