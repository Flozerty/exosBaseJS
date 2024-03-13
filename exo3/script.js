
const container = document.querySelector("#container")
const squares = container.querySelectorAll('.square');

squares.forEach(element => {

  element.addEventListener(('click'), () => {

    element.classList.toggle('selected')
  })
});