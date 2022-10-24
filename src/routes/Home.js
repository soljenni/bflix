import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";

import Movie from "../components/Movie";
import Header from "../components/Header";

import Replace from "../img/replace.jpg";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const getMovies = async () => {
    const info = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=7&sort_by=year"
    );
    const json = await info.json();
    setMovies(json.data.movies);
    // doubel [] exists
    setLoading(false);

    const randomNum = Math.floor(Math.random() * 10314 + 1);
    const randomNum2 = Math.floor(Math.random() * 4);
    const suggestionsJson = await (
      await fetch(
        `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${randomNum}&sort_by=year`
      )
    ).json();

    const suggestedMovie = suggestionsJson.data.movies[randomNum2];
    setSuggestions(suggestedMovie);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const onErrorImg = (e) => {
    e.target.src = Replace;
  };
  const ratingNum = () => {
    const ratingArray = [];
    for (let i = 0; i < suggestions.rating; i++) {
      ratingArray.push(<IoIosStar />);
    }
    return ratingArray;
  };

  return (
    <div className="wrap">
      <Header></Header>
      {loading ? (
        <h1 className="loading">
          <AiOutlineLoading />
        </h1>
      ) : (
        <div className="main">
          <div
            className="visual"
            style={{ backgroundImage: `url(${suggestions.background_image})` }}
          >
            <div className="visual_wrap">
              <div className="visual_title">Recommended Movie</div>

              <div className="visual_info">
                <img
                  className="visual_img"
                  src={suggestions.medium_cover_image}
                  alt={suggestions.title}
                  onError={onErrorImg}
                />
                <div className="visual_box">
                  <div className="visual_movieTitle">
                    {suggestions.title} {suggestions.year}
                  </div>
                  <div className="visual_rating">{ratingNum()}</div>
                  <div className="visual_description">
                    {suggestions.description_full}
                  </div>
                  <ul className="visual_detailGenres">
                    {suggestions.genres &&
                      suggestions.genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="movie_box">
            <div className="movie_tit">Movie with high ratings</div>
            <div className="movie_list">
              {movies &&
                movies.map((movie) => (
                  <Movie
                    year={movie.year}
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    rating={movie.rating}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
