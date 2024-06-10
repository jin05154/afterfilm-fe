import styled from "styled-components";
import COLOR from "../../utils/color";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Star({ filled, half, onClick }) {
  return (
    <StarContainer onClick={onClick}>
      {filled ? (
        <FaStar size={36} color={COLOR.themeYellow} />
      ) : (
        <FaRegStar size={36} color={COLOR.themeYellow} />
      )}
    </StarContainer>
  );
}

export default Star;

const StarContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;
