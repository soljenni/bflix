import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Replace from "../img/replace.jpg";

function Movie({ id, coverImg, title, rating, year }) {
  const onErrorImg = (e) => {
    e.target.src = Replace;
  };

  return (
    <div className="movie_item">
      <div className="movie_img">
        <img src={coverImg} alt={title} onError={onErrorImg} />
        <div className="movie_imgBox">
          <div className="movie_imgWrap">
            <p className="movie_imgYear">{year}</p>
            <p className="movie_imgRating">{rating} / 10</p>
            <Link className="movie_imgBtn" to={`/movie/${id}`}>
              Detail
            </Link>
            {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
            {/* <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
          </div>
        </div>
      </div>
      <h2 className="movie_title">{title}</h2>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,

  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
