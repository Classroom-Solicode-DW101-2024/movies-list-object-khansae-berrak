class Movie {
    constructor(title, description, date, rating) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.rating = rating;
    }
}

let movies = [
    new Movie('Carwila', 'Semble être une variation de Cendrillon', 1950, 5),
    new Movie('Riponzel', 'Probablement Raiponce (princesse aux cheveux longs).', 1999, 4),
    new Movie('Mouana', 'Vaiana (film d\'animation de Disney avec une héroïne polynésienne)', 2009, 3.5),
    new Movie('Ilsa', 'Pourrait s\'agir de Elsa de La Reine des Neiges', 2005, 3),
    new Movie('Cendrilla', 'Cendrillon (conte classique d\'une jeune fille maltraitée qui devient princesse)', 2000, 4.5),
    new Movie('Pinokyo', 'Pinocchio (marionnette qui rêve de devenir un vrai garçon)', 2004, 2.5),
    new Movie('Macha', 'Peut-être Macha et l\'ours (série animée russe)', 2001, 3),
    new Movie('Wavka', 'Peut-être un nom qui fait référence à Avatar ou un film similaire', 1940, 2),
    new Movie('Avatar', 'Film de science-fiction de James Cameron avec des créatures extraterrestres sur la planète Pandora', 2023, 1),
    new Movie('Snowhite', 'Blanche-Neige (conte de fée sur une princesse et la méchante reine)', 1998, 5)
];


function display(movieList) {
    let tableBody = document.getElementById('movieTable');
    tableBody.innerHTML = '';

    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.date}</td>
            <td>${movie.rating}</td>
            <td><button type="button" onclick="deleteMovie(${i})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    }
}

function deleteMovie(index) {
    movies.splice(index, 1);
    display(movies);
}


function addMovie() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let rating = parseFloat(document.getElementById('rating').value);

    if (title && description && date && !isNaN(rating) && rating >= 0 && rating <= 5) {
        let newMovie = new Movie(title, description, date, rating);
        movies.push(newMovie);
        display(movies);
        document.getElementById('formmovie').reset();
        showMovies(); 
    } else {
        alert("Please fill all fields correctly.");
    }
}


function showAddForm() {
    document.getElementById('formmovie').style.display = 'block'; 
    document.getElementById('moviesTable').style.display = 'none'; 
}


function showMovies() {
    document.getElementById('formmovie').style.display = 'none'; 
    document.getElementById('moviesTable').style.display = 'block'; 
    display(movies);
}


document.getElementById('searchButton').addEventListener('click', function () {
    let search = document.getElementById('Search').value.toLowerCase();
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search));
    display(filteredMovies);
});



display(movies);
