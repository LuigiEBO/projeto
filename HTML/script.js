function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  ///vc esqueceu de por a letra maiuscula (l) por isso tava dando erro
  if (html.classList.contains("light")) {
    img.setAttribute("src", "../CSS/avatar-light.png")
  } else {
    img.setAttribute("src", "../CSS/avatar.png")
  }
  //pegar a tag img
  //substituir a imagem 
  // se tiver light mode adicionar a imagem light
  // se tiver sem light mode manter a imagem normal
   if (html.classList.contains("light")) {
     img.setAttribute("alt", "Foto mayk brito com oculos escuro e camisa azul")
   } else {
     img.setAttribute("alt", "Foto do mayk brito com camisa Preta")
   }
}