const movieData = [
  {
    title: "Inception",
    genre: "Sci-Fi, Thriller",
    year: 2010,
    rating: 8.8,
    poster: "movies/inception.jpeg",
    isAvailable: true,
  },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    year: 2008,
    rating: 9.0,
    poster: "movies/Dark-knight.jpeg",
    isAvailable: true,
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi, Adventure, Drama",
    year: 2014,
    rating: 8.6,
    poster: "movies/interstellar.jpeg",
    isAvailable: false,
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi, Action",
    year: 1999,
    rating: 8.7,
    poster: "movies/matrix.jpeg",
    isAvailable: true,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <MovieBox />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>old movie store</h1>
    </div>
  );
}

function MovieBox() {
  return (
    <div className="movieBox">
      {movieData.map((movie) => (
        <ul className="list-container">
          <MovieBoxChild movie={movie} key={movie.title} />
        </ul>
      ))}
    </div>
  );
}

function MovieBoxChild({ movie }) {
  const isAvailable = movie.isAvailable;
  return (
    <li className="movie-list">
      <img src={movie.poster} alt="movie.title"></img>
      <div>
        <h2>{movie.title}</h2>
        <h4>{movie.genre}</h4>
        <span>{movie.year}</span>
        <p>{movie.rating}</p>
        {isAvailable ? (
          <>
            <span>Available</span>
            <button className="btn">Watch now</button>
          </>
        ) : (
          <span> Coming soon</span>
        )}
      </div>
    </li>
  );
}
