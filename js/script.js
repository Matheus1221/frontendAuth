const imgSelector = document.querySelectorAll(".images img");

// const alterColor = document.querySelectorAll(".images h2");
var h2Selecionado = null;
imgSelector.forEach((imagem) => {
  imagem.addEventListener("click", () => {
    imgSelector.forEach((outraImagem) => {
      outraImagem.classList.remove("selected");
      outraImagem.nextElementSibling.style.color = "white";
    });
    imagem.classList.add("selected");
    if (h2Selecionado) {
      h2Selecionado.style.color = "white";
    }

    h2Selecionado = imagem.nextElementSibling;

    setTimeout(() => {
      h2Selecionado.style.color = "black";
    }, 100);
  });
});

// alterColor.forEach((cor) => {
//   if (imagem.classList.contains("selected")) {
//   }
// });
