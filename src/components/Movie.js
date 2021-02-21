import React from "react";
import './Movie.css';

const Movie = ({ title, poster,summary, year }) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie__info">
                <h2>{title}</h2>
                <h4>{year}</h4>
                <span>{summary.slice(0,200)} ...</span>
            </div>
        </div>
    );
};

export default Movie;
