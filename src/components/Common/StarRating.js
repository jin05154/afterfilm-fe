import { useState } from "react";
import styled from "styled-components";

import Star from "./Star";

function StarRating({ initialRating = 3 }) {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <Wrapper>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
      <span>{rating}</span>
    </Wrapper>
  );
}

export default StarRating;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 300px;
  gap: 10px;
  
  span {
    padding-left: 8px;
    font-size: 1.4rem;
  }
`;
