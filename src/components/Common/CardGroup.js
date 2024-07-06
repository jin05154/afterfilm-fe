import { useState, useEffect } from "react";
import { SCardWrapper } from "./StyledComponents";

import Card from "./Card";
import MOVIEDATA from "../../assets/mockData";

function CardGroup() {
  const [movies, setMovies] = useState([]);
  const [chunkedMovies, setChunkedMovies] = useState([]);

  useEffect(() => {
    fetch("/api/movie/box-office")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data.response);
        setMovies(data.response);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Chunk movies into groups of 3
    const chunk = [];
    for (let i = 0; i < movies.length; i += 3) {
      chunk.push(movies.slice(i, i + 3));
    }
    setChunkedMovies(chunk);
  }, [movies]);

  useEffect(() => {
    console.log("Movies state updated:", movies);
    console.log("Movies chunked:", chunkedMovies);
  }, [movies, chunkedMovies]);

  return (
    <div>
      {chunkedMovies.map((moviesChunk, index) => (
        <SCardWrapper key={`cardWrapper-${index}`}>
          {moviesChunk.map((movie, movieId) => (
            <Card
              key={`card-${index}-${movieId}`}
              title={movie.title}
              desc={movie.plot}
              img={movie.posterUrls[0]}
            />
          ))}
        </SCardWrapper>
      ))}
    </div>
  );
}

export default CardGroup;
