function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  ///vc esqueceu de por a letra maiuscula (l) por isso tava dando erro
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto.jpeg")
  } else {
    img.setAttribute("src", "./assets/foto.jpeg")
  }
  //pegar a tag img
  //substituir a imagem 
  // se tiver light mode adicionar a imagem light
  // se tiver sem light mode manter a imagem normal
   if (html.classList.contains("light")) {
     img.setAttribute("alt", "Foto do Luigi com camisa Preta")
   } else {
     img.setAttribute("alt", "Foto do Luigi com camisa Preta")
   }
}