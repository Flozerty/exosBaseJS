const body = document.querySelector('body')
const div = document.createElement('div')
div.innerText = "BOOH"
div.style.backgroundColor = "red";
div.style.width = '200px';
div.style.height = "200px";
div.style.display = "flex";
div.style.alignItems = "center"
div.style.justifyContent = "center";
div.style.color = "green";
div.style.fontSize = "3rem";
div.style.fontFamily = "Times New Roman"

body.appendChild(div)

div.addEventListener('click', () => {
  alert(`
  \t Background-color : ${div.style.backgroundColor}
  \t Color : ${div.style.color}
  \t Heigth : ${div.style.height}
  \t Width : ${div.style.width}
  \t Display : ${div.style.display}
  \t Font : ${div.style.fontFamily} (${div.style.fontSize})
  `)
})