import React from "react";
import './Movie.css';

const Movie = ({ title, poster,summary, year }) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie__info">
                <h3>{title}</h3>
                <h5>{year}</h5>
                <span>{summary.slice(0,200)} ...</span>
            </div>
        </div>
    );
};

export default Movie;
