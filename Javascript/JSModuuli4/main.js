'use strict';

async function search(input) {
    const url = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
    const resp = await url.json();
    console.log(resp);

    if (resp.length > 0) {
        for (let i = 0; i < resp.length; i++) {

            // console.log(resp.length);
            const article = document.querySelector('main').appendChild(
                document.createElement('article'));

            const title = article.appendChild(document.createElement('h2'));
            const image = article.appendChild(document.createElement('img'));
            const link = article.appendChild(document.createElement('a'));
            const summary = article.appendChild(document.createElement('p'));
            const genres = article.appendChild(document.createElement('p'));
            const dialog = document.body.appendChild(document.createElement('dialog'))
            // console.log('elementit luotu');

            link.setAttribute('target', '_blank');

            title.innerText = resp[i].show.name;
            try {
                image.src = resp[i].show.image.medium;
            } catch (e) {
                if (e instanceof TypeError) {
                    image.src = 'https://via.placeholder.com/100x200';
                }
                // console.log('hei menin tänne');
            } finally {
                // console.log('pääsin finallyyn sisälle');
                link.innerText = resp[i].show.url;
                link.href = resp[i].show.url;

                if (resp[i].show['summary'] != null) {
                    summary.innerHTML = resp[i].show['summary'];
                } else {
                    summary.innerText = 'No summary available';
                }

                if (resp[i]['show']['genres'].length > 0) {
                    for (let a = 0; a < resp[i]['show']['genres'].length; a++) {
                        console.log(resp[i]['show']['genres'][a]);
                        if (resp[i]['show']['genres'].length === 1 ||
                            resp[i]['show']['genres'][a] ===
                            resp[i]['show']['genres'][resp[i]['show']['genres'].length - 1]) {
                            genres.innerHTML += resp[i]['show']['genres'][a];
                        } else {
                            genres.innerHTML += `${resp[i]['show']['genres'][a]} | `;
                        }
                    }
                }
                image.addEventListener('click', () => {
                    const iframe = dialog.appendChild(document.createElement('iframe'));
                    iframe.src = resp[i].show.url;
                    dialog.showModal();

                    const div = dialog.appendChild(document.createElement('div'));
                    div.addEventListener('click', (e) => e.stopPropagation());

                    dialog.addEventListener('click', () => dialog.close());

                });
            }
        }
    } else {
        document.body.appendChild(document.createElement('p')).innerText = 'No search results found.'
    }
}

const button = document.querySelector('#nappi');

button.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('main').innerHTML = '';
    const input = document.querySelector('#query').value;

    search(input);

});

