import { citations } from "./quotes.js";

const main = document.querySelector('main')

console.log(citations)

// citations.forEach(citation => {

//   console.log(citation)
//   const blockquote = document.createElement('blockquote');

//   const p = document.createElement('p');
//   p.innerText = `"${citation.citation}"`
//   const cite = document.createElement('cite');
//   cite.innerText = citation.auteur

//   blockquote.appendChild(p);
//   blockquote.appendChild(cite);
//   main.appendChild(blockquote)
// });

for (let key in citations) {

  let citation = citations[key]
  console.log(citation)
  const blockquote = document.createElement('blockquote');

  const p = document.createElement('p');
  p.innerText = `"${citation.citation}"`
  const cite = document.createElement('cite');
  cite.innerText = citation.auteur

  blockquote.appendChild(p);
  blockquote.appendChild(cite);
  main.appendChild(blockquote)
};