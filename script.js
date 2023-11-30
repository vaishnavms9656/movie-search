function search() {
  if (key.value == "") {
    alert("Enter a movie name");
  } else {
    fetch(`https://www.omdbapi.com/?apikey=ddd5e7b5&t=${key.value}`)
      .then((data) => data.json())
      .then((data) => {
        displaymovies(data);
      });
  }
}

function displaymovies(data) {
  htmlData = `
        <div class="text-center ">
        <img src="${data.Poster}" alt="" height="200px">
            <h3 class="text-danger mt-2">${data.Title}</h6>
            <p class=" text-justify mt-2"><span class="fw-bolder">Plot: </span>${data.Plot}</p>
            <p class="mt-2"><span class="fw-bolder">Director: </span>${data.Director}</p>
            <p class="mt-2"><span class="fw-bolder">Actors: </span>${data.Actors}</p>
            <p class="mt-2"><span class="fw-bolder">Imdb: </span>${data.imdbRating}</p>

        </div>`;

  result.innerHTML = htmlData;
}
