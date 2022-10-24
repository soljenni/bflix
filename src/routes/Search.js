import { useEffect, useState } from "react";
import Header from "../components//Header";
import { AiOutlineSearch } from "react-icons/ai";
import Movie from "../components/Movie";

function Search() {
  const [query, setQuery] = useState(null);
  const [queryMovies, setqueryMovie] = useState([]);
  const searchEnter = async (e) => {
    e.preventDefault();
    // if not using e.preventDefault(), before getting api the page itself render again
    // therefore, the process stops in the middle.
    const querythemoive = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`)
    ).json();

    setqueryMovie(querythemoive.data.movies);
  };
  return (
    <div className="wrap">
      <Header />;
      <div className="search">
        <div className="search_box">
          <form>
            <input
              className="search_input"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            ></input>

            <button className="search_btn" onClick={searchEnter}>
              <AiOutlineSearch></AiOutlineSearch>
            </button>
          </form>
        </div>
      </div>
      <div className="movie_box">
        <div className="movie_list">
          {queryMovies &&
            queryMovies.map((queryMovie) => (
              <Movie
                key={queryMovie.id}
                id={queryMovie.id}
                coverImg={queryMovie.medium_cover_image}
                title={queryMovie.title}
                rating={queryMovie.rating}
                genres={queryMovie.genres}
                summary={queryMovie.summary}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
