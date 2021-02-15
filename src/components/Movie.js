import React from "react";

const Movie = ({ title, poster,summary }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={poster} alt={title} />
            <span>{summary}</span>
        </div>
    );
};

export default Movie;