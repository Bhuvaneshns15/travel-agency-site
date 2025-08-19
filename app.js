document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Remove or wrap this safely
let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_bx = document.getElementById('menu_bx');

if (menu_btn && menu_bx) {
  menu_btn.addEventListener('click', () => {
    menu_bx.classList.toggle('ul_active');
  });
}

// ----------------- Card Zoom Feature -----------------
document.querySelectorAll(".travel-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;

    document.getElementById("zoomImg").src = imgSrc;
    document.getElementById("zoomTitle").innerText = title;
    document.getElementById("zoomDesc").innerText = desc;

    document.getElementById("zoomOverlay").classList.add("active");
  });
});

document.getElementById("zoomClose").addEventListener("click", () => {
  document.getElementById("zoomOverlay").classList.remove("active");
});

document.getElementById("zoomOverlay").addEventListener("click", (e) => {
  if (e.target.id === "zoomOverlay") {
    document.getElementById("zoomOverlay").classList.remove("active");
  }
});
