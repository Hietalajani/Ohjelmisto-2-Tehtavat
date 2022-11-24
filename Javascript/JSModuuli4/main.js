'use strict';

async function search(input) {
  const url = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
  const resp = await url.json();
  console.log(resp);

  for (let i = 0; i < resp.length; i++) {

    console.log(resp.length);
    const article = document.body.appendChild(
        document.createElement('article'));

    const title = article.appendChild(document.createElement('h2'));
    const image = article.appendChild(document.createElement('img'));
    const link = article.appendChild(document.createElement('a'));
    const summary = article.appendChild(document.createElement('p'));
    console.log('elementit luotu');

    link.setAttribute('target', '_blank');

    title.innerText = resp[i].show.name;
    try {
      image.src = resp[i].show.image.medium;
    } catch (e) {
      if (e instanceof TypeError) {
        image.src = 'https://via.placeholder.com/100x200';
      }
      console.log('hei menin tänne');
    } finally {
      console.log('pääsin finallyyn sisälle');
      link.innerText = resp[i].show.url;

      if (resp[i].show['summary'] != null) {
        summary.innerHTML = resp[i].show['summary'];
      } else {
        summary.innerText = 'No summary available';
      }
    }
  }
}

const button = document.querySelector('#nappi');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const input = document.querySelector('#query').value;

  search(input);
});

