// 🎉 Confetti (Optional: we can add confetti lib if you want)
const modal = document.getElementById("messageModal");
const openBtn = document.getElementById("openMessage");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
