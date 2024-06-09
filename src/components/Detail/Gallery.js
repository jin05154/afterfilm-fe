import { DGalleryWrapper, DGalleryIconLeft, DGalleryIconRight } from "../Common/StyledComponents";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Card from "../Common/Card";
import MOVIEDATA from "../../assets/mockData";

function Gallery() {
  // Chunk MOVIEDATA into groups of 3
  const chunkedMovies = [];
  for (let i = 0; i < 2; i += 3) {
    chunkedMovies.push(MOVIEDATA.slice(i, i + 3));
  }

  return (
    <div>
      {chunkedMovies.map((movies, index) => (
        <DGalleryWrapper key={`cardWrapper-${index}`}>
          <DGalleryIconLeft>
            <FaChevronCircleLeft color='#fff' />
          </DGalleryIconLeft>  
          {movies.map((movie, movieIndex) => (
            <Card
              key={`card-${index}-${movieIndex}`}
              img={movie.img}
            />
          ))}
          <DGalleryIconRight>
            <FaChevronCircleRight color='#fff' />
          </DGalleryIconRight>  
        </DGalleryWrapper>
      ))}
    </div>
  );
}

export default Gallery;
