const container = document.getElementById("veiculos-container");

veiculos.forEach(v => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${v.imagem}" alt="${v.nome}" />
    <h3>${v.nome}</h3>
    <p>${v.preco}</p>
    <a href="https://wa.me/5585994508145?text=Olá,%20quero%20comprar%20o%20veículo%20${v.nome}" target="_blank" class="botao-comprar">COMPRAR</a>
  `;
  container.appendChild(card);
});