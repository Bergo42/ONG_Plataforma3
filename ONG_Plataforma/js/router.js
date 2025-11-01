// SPA simples: carrega conteúdo da página sem recarregar o HTML completo
const routes = {
  "/": "index.html",
  "/index": "index.html",
  "/projetos": "projetos.html",
  "/cadastro": "cadastro.html"
};

function loadPage(path) {
  const main = document.querySelector("main.conteudo");
  fetch(routes[path] || routes["/"])
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const newContent = doc.querySelector("main.conteudo");
      if (newContent) main.innerHTML = newContent.innerHTML;
    })
    .catch(err => console.error("Erro ao carregar a página:", err));
}

// Captura cliques nos links internos
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const path = link.getAttribute("href").replace(".html", "");
      history.pushState({}, "", link.href);
      loadPage(path);
    });
  });
});

// Permite navegar com os botões de voltar/avançar
window.addEventListener("popstate", () => {
  const path = location.pathname.replace(".html", "");
  loadPage(path);
});
