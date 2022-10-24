import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);

  const getMovie = async () => {
    const data1 = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    const data2 = await data1.json();
    const data3 = data2.data.movie;
    setLoading(false);
    setMovies(data3);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const ratingNum = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(movie.rating); i++) {
      stars.push(<IoIosStar />);
    }
    return stars;
  };
  return (
    <div className="wrap">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className="movie_detail"
          style={{ backgroundImage: `url(${movie.background_image_original})` }}
        >
          <div className="movie_detailWrap">
            <div className="movie_detailBox">
              <Link to="/" className="close">
                <AiOutlineClose />
              </Link>

              <h2 className="movie_detailTit">{movie.title}</h2>

              <div className="movie_detailImg">
                <img src={movie.large_cover_image} alt={movie.title} />
              </div>
              <div className="movie_rating">{ratingNum()}</div>
              <p className="movie_detailIntro">{movie.description_intro}</p>
              <ul className="movie_detailGenres">
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
}

export default Detail;
