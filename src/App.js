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
    title: "The Batman: Part II",
    genre: "Action, Crime, Superhero",
    year: 2025,
    rating: null,
    poster: "movies/batman-part2.jpeg",
    isAvailable: false,
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi, Adventure, Drama",
    year: 2014,
    rating: 8.6,
    poster: "movies/interstellar.jpeg",
    isAvailable: true,
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi, Action",
    year: 1999,
    rating: 8.7,
    poster: "movies/matrix.jpeg",
    isAvailable: true,
  },
  {
    title: "Gladiator",
    genre: "Action, Drama, Adventure",
    year: 2000,
    rating: 8.5,
    poster: "movies/gladiator.jpeg",
    isAvailable: true,
  },
  {
    title: "Frankenstein",
    genre: "Horror, Drama",
    year: 2025,
    rating: null,
    poster: "movies/frankenstein.jpeg",
    isAvailable: false,
  },
  {
    title: "Avengers: Endgame",
    genre: "Action, Sci-Fi, Adventure",
    year: 2019,
    rating: 8.4,
    poster: "movies/endgame.jpeg",
    isAvailable: true,
  },

  {
    title: "Zootopia 2",
    genre: "Animation, Adventure, Comedy",
    year: 2025,
    rating: null,
    poster: "movies/zootopia.jpeg",
    isAvailable: false,
  },
];

export default function App() {
  return (
    <div className="Box">
      <NavBar />

      <div className="container">
        <MovieBox />
      </div>
      <Footer />
    </div>
  );
}
function NavBar() {
  return (
    <div className="navBar">
      <Logo />
      <Search />
      <GoMenu />
    </div>
  );
}
function Logo() {
  return (
    <h1 className="logo">
      <span>🎥</span>cinema
    </h1>
  );
}
function Search() {
  return (
    <input type="search" placeholder="Search for movie" className="search" />
  );
}
function GoMenu() {
  return (
    <span className="bars">
      <img src="movies/bars.png" alt="bars"></img>
    </span>
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
// function starRating(){
//   return()
// }

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
            <button className="btn">View Details</button>
          </>
        ) : (
          <>
            <span> Coming soon</span>
            <button className="btn">View Details</button>
          </>
        )}
      </div>
    </li>
  );
}

function Footer() {
  return <p>Still Coming</p>;
}
