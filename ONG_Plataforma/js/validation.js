document.addEventListener(DOMContentLoaded, () = {
  const form = document.getElementById(formCadastro);

  if (!form) return;

  form.addEventListener(submit, e = {
    e.preventDefault();

    const nome = document.getElementById(nome).value.trim();
    const email = document.getElementById(email).value.trim();
    const telefone = document.getElementById(telefone).value.trim();
    const mensagem = document.getElementById(mensagem).value.trim();

    let erros = [];

    if (nome.length  3) erros.push(Nome deve ter ao menos 3 caracteres.);
    if (!^[^s@]+@[^s@]+.[^s@]+$.test(email)) erros.push(Email inválido.);
    if (telefone && !^d{8,15}$.test(telefone.replace(Dg, ))) erros.push(Telefone inválido.);
    if (mensagem.length  10) erros.push(Mensagem deve ter ao menos 10 caracteres.);

    if (erros.length  0) {
      alert(Errosn + erros.join(n));
      return;
    }

     Se passar na validação, salva no localStorage
    const cadastro = { nome, email, telefone, mensagem };
    saveCadastro(cadastro);

    alert(Cadastro realizado com sucesso!);
    form.reset();
  });
});
