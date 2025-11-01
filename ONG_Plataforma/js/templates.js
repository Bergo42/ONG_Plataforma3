// Função simples para gerar cards de projetos dinamicamente
function createProjectCard({ title, description, image }) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${image}" alt="${title}">
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  return card;
}

// Exemplo de uso em projetos.html
document.addEventListener("DOMContentLoaded", () => {
  const projetosGrid = document.querySelector(".projetos-grid");
  if (projetosGrid) {
    const projetos = [
      { title: "Horta Comunitária", description: "Produção colaborativa de alimentos orgânicos e oficinas de plantio sustentável.", image: "images/horta.jpg" },
      { title: "Educação Ambiental", description: "Atividades educativas sobre reciclagem, compostagem e economia de recursos naturais.", image: "images/educacao.jpg" }
    ];

    projetos.forEach(proj => {
      const card = createProjectCard(proj);
      projetosGrid.appendChild(card);
    });
  }
});
