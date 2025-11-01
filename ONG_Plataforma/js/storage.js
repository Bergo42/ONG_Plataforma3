function saveCadastro(cadastro) {
  const cadastros = JSON.parse(localStorage.getItem("cadastros") || "[]");
  cadastros.push(cadastro);
  localStorage.setItem("cadastros", JSON.stringify(cadastros));
}

function getCadastros() {
  return JSON.parse(localStorage.getItem("cadastros") || "[]");
}

// Exemplo: mostrar cadastros no console
console.log(getCadastros());
