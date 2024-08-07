import './styles/style.css';
import { getMovies } from './script/ajax.js';
import { updateUI, showMovieDetail } from './script/ui.js';
import './element/custom-heading.js';

const searchButton = document.querySelector('.custom-search-button');
const inputKeyword = document.querySelector('.input-keyword');

searchButton.addEventListener('click', async () => {
    try {
        const movies = await getMovies(inputKeyword.value, true);
        if (movies) {
            updateUI(movies);
        } else {
            console.error('Failed to fetch movies.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});

inputKeyword.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        try {
            const movies = await getMovies(inputKeyword.value, true);
            if (movies) {
                updateUI(movies);
            } else {
                console.error('Failed to fetch movies.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
});

document.querySelector('.movie-container').addEventListener('click', (event) => {
    const imdbID = event.target.getAttribute('data-imdbid');
    if (imdbID) {
        showMovieDetail(imdbID);
    }
});
