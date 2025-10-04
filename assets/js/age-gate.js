document.getElementById('yes-btn').addEventListener('click', () => {
  localStorage.setItem("ageVerified", "true");
  window.location.href = "home.html";
});

document.getElementById('no-btn').addEventListener('click', () => {
  window.location.href = "https://thekoolaid.org/index.html";
});

window.onload = () => {
  if(localStorage.getItem("ageVerified") === "true"){
    window.location.href = "home.html";
  }
};
