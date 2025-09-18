document.getElementById('yes-btn').addEventListener('click', () => {
  localStorage.setItem("ageVerified", "true");
  window.location.href = "home.html";
});

document.getElementById('no-btn').addEventListener('click', () => {
  window.location.href = "https://www.samhsa.gov/";
});

window.onload = () => {
  if(localStorage.getItem("ageVerified") === "true"){
    window.location.href = "home.html";
  }
};
