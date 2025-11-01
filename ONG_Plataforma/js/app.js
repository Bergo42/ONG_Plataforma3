// Inicializa SPA e templates
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa SPA
  if (typeof loadPage === "function") {
    const path = location.pathname.replace(".html", "");
    loadPage(path);
  }

  // Carrega cards de projetos automaticamente
  if (typeof createProjectCard === "function") {
    const projetosGrid = document.querySelector(".projetos-grid");
    if (projetosGrid) {
      const projetos = [
        { title: "Horta Comunitária", description: "Produção colaborativa de alimentos orgânicos e oficinas de plantio sustentável.", image: "images/horta.jpg" },
        { title: "Educação Ambiental", description: "Atividades educativas sobre reciclagem, compostagem e economia de recursos naturais.", image: "images/educacao.jpg" }
      ];

      projetos.forEach(proj => projetosGrid.appendChild(createProjectCard(proj)));
    }
  }
});
