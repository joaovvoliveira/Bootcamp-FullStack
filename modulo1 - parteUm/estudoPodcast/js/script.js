window.addEventListener('load', () => {
  let inputRange = null;
  let inputFrequency = null;
  let divPodcasts = null;

  inputRange = document.querySelector('#inputRange');
  inputFrequency = document.querySelector('#inputFrequency');
  divPodcasts = document.querySelector('#divPodcasts');

  inputRange.addEventListener('input', handleRangeChange);
  handlePodcastFrom(inputRange.value);
});

function handleRangeChange(event) {
  let currentFrequency = event.target.value;
  inputFrequency.value = currentFrequency;

  handlePodcastFrom(inputRange.value);
}

function handlePodcastFrom(frequency) {
  var foundPodcast = null;

  foundPodcast = realPodcasts.find(function (currentPodcast) {
    return currentPodcast.id === frequency;
  });

  // for (let i = 0; i < realPodcasts.length; i++) {
  //   var currentPodcast = realPodcasts[i];
  //   if (currentPodcast.id === frequency) {
  //     foundPodcast = currentPodcast;
  //     break; // para o processamento do for
  //   }
  // }
  renderPodcast(foundPodcast);
}

function renderPodcast(podcast) {
  if (!podcast) {
    divPodcasts.innerHTML = '<span>Nenhum podcast Encontrado!</span>';
    return;
  }
  var { img, title, description } = podcast;

  divPodcasts.innerHTML = `<img src='./img/${img}'/>
  <h2>${title}</h2>
  <p>${description}</p>`;

  // const img = document.createElement('img');
  // img.src = './img/' + podcast.img;
  // img.classList.add('img');

  // const title = document.createElement('h2');
  // title.textContent = podcast.title;

  // const description = document.createElement('span');
  // description.textContent = podcast.description;

  // divPodcasts.innerHTML = '';
  // divPodcasts.appendChild(img);
  // divPodcasts.appendChild(title);
  // divPodcasts.appendChild(description);

  // divPodcasts.innerHTML =
  //   "<img src='./img/" +
  //   podcast.img +
  //   "' />" +
  //   '<h2>' +
  //   podcast.title +
  //   '</h2>' +
  //   '<p>' +
  //   podcast.description +
  //   '</p>';
}
