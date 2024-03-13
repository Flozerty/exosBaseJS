const main = document.querySelector('main');
const container = document.querySelector('#container');
const socials = container.querySelectorAll('.social');



socials.forEach(social => {

  const span = social.querySelector('span');
  let selected = false;

  social.addEventListener('click', () => {

    social.classList.toggle('selected')

    if (selected) {
      main.style.backgroundColor = "rgb(167, 167, 167)";
      selected = false;
      span.style.color = "transparent"

    } else {
      main.style.backgroundColor = getComputedStyle(social).backgroundColor
      selected = true;

      setTimeout(() => {
        span.style.color = "white"
      }, 1000);
    }
  })
})

