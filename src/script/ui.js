export const updateUI = (movies) => {
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = '';
    movies.forEach((movie) => {
      movieContainer.innerHTML += showMovieCard(movie);
    });
  };
  
  export const showMovieCard = (movie) => {
    const { Title, Year, Poster, imdbID } = movie;
    return `
      <div class="col-md-4 my-3">
        <div class="card">
          <img src="${Poster}" class="card-img-top" alt="${Title}">
          <div class="card-body">
            <h5 class="card-title">${Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
            <button type="button" class="detail-button" data-imdbid="${imdbID}">Lihat Detail</button>
          </div>
        </div>
      </div>
    `;
  };
  
  export const showMovieDetail = async (imdbID) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=b684559&i=${imdbID}`);
      const data = await response.json();
  
      if (data.Response === "True") {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
          <div class="movie-detail-container">
            <img src="${data.Poster}" alt="${data.Title}" class="movie-poster">
            <div class="movie-details">
              <h5 class="movie-title">${data.Title}</h5>
              <p><strong>Year:</strong> ${data.Year}</p>
              <p><strong>Director:</strong> ${data.Director}</p>
              <p><strong>Actors:</strong> ${data.Actors}</p>
              <p><strong>Writer:</strong> ${data.Writer}</p>
              <p><strong>Plot:</strong> ${data.Plot}</p>
            </div>
          </div>
        `;
  
        const movieDetailModal = new bootstrap.Modal(document.getElementById('movieDetailModal'));
        movieDetailModal.show();
      } else {
        console.error('Failed to fetch movie details:', data.Error);
      }
    } catch (error) {
      console.error('An error occurred while fetching movie details:', error);
    }
  };
  