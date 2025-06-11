// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Modal logic
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const hireButtons = document.querySelectorAll(".hire-btn");
const modalTitle = document.getElementById("modal-title");

hireButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    modalTitle.textContent = Hire ${name};
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});