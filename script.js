// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    document.getElementById("themeSelect").value = savedTheme;
  }
});

// Theme switch and save
document.getElementById("themeSelect").addEventListener("change", function () {
  document.body.classList.remove("light", "dark");
  const selectedTheme = this.value;
  document.body.classList.add(selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.add("animate");

  // Remove class after animation ends to allow repeat
  setTimeout(() => {
    box.classList.remove("animate");
  }, 600);
});
