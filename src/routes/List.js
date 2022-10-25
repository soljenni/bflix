import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import Paging from "../components/Paging";

import Header from "../components/Header";

function List() {
  const { genres } = useParams();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalpages, setTotalmovies] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesJson = await (
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?genre=${genres}&page=${page}&sort_by=year`
          )
        ).json();
        setMovies(moviesJson.data.movies);
        setLoading(false);

        setTotalmovies(moviesJson.data.movie_count);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [page, genres]);

  return (
    <div className="wrap">
      <Header></Header>
      {loading ? (
        <h1 className="loading">
          <AiOutlineLoading />
        </h1>
      ) : (
        <div className="list">
          <div className="movie_box">
            <div className="movie_list">
              {movies &&
                movies.map((movie) => (
                  <Movie
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
            <div className="movie_paging">
              <Paging
                page={page}
                totalpages={totalpages}
                handlePageChange={handlePageChange}
              ></Paging>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
