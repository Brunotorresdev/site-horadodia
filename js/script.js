function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "assets/images/imagem-manha.png";
    document.body.style.background = "#d58b90";
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde!
    img.src = "assets/images/img-tarde.png";
    document.body.style.background = "#ddb684";
  } else {
    //Boa noite!
    img.src = "assets/images/img-noite.png";
    document.body.style.background = "#00559b";
  }
}
