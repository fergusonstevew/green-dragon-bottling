const strains = [
  { name: "Blue Dream", description: "Balanced hybrid with sweet berry aroma." },
  { name: "OG Kush", description: "Strong indica with relaxing effects." },
  { name: "Sour Diesel", description: "Energizing sativa with pungent smell." }
];

const container = document.getElementById("strain-list");
if (container) {
  strains.forEach(s => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<h3>${s.name}</h3><p>${s.description}</p>`;
    container.appendChild(div);
  });
}
