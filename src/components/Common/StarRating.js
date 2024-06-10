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
  width: 300px;
  height: 36px;
  gap: 10px;
  padding: 4px 0;
  
  span {
    display: inline-block;
    width: 12px;
    height: inherit;
    padding-left: 8px;
    font-size: 1.4rem;
  }
`;
