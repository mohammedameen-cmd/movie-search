async function searchMovie() {
    const movieName = document.getElementById('movieName').value;
    const movieDetails = document.getElementById('movieDetails');
    
    // Clear previous movie details
    movieDetails.innerHTML = '';

    if (!movieName) {
        movieDetails.innerHTML = '<p>Please enter a movie name.</p>';
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=fa1c9c03&t=${encodeURIComponent(movieName)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            movieDetails.innerHTML = '<p>Movie not found. Please try again.</p>';
            return;
        }

        // Display movie details
        movieDetails.innerHTML = `
            <img src="${data.Poster}" alt="Movie Poster">
            <h3>${data.Title}</h3>
            <p><strong>Released:</strong> ${data.Released}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Writer:</strong> ${data.Writer}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
            <p><strong>Language:</strong> ${data.Language}</p>
            <p><strong>Country:</strong> ${data.Country}</p>
            <p><strong>Awards:</strong> ${data.Awards}</p>
            <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
        movieDetails.innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
}
