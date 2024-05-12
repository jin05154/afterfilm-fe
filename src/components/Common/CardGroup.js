import styled from "styled-components";

import Card from "./Card";
import MOVIEDATA from "../../assets/mockData";

const SCardWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  height: 225px;
  width: 1200px;
`;

function CardGroup() {
  // Chunk MOVIEDATA into groups of 3
  const chunkedMovies = [];
  for (let i = 0; i < MOVIEDATA.length; i += 3) {
    chunkedMovies.push(MOVIEDATA.slice(i, i + 3));
  }

  return (
    <div>
      {chunkedMovies.map((movies, index) => (
        <SCardWrapper key={`cardWrapper-${index}`}>
          {movies.map((movie, movieIndex) => (
            <Card
              key={`card-${index}-${movieIndex}`}
              title={movie.title}
              desc={movie.desc}
              img={movie.img}
            />
          ))}
        </SCardWrapper>
      ))}
    </div>
  );
}

export default CardGroup;
