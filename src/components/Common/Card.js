import styled from "styled-components";
import COLOR from "../../utils/color";

const SMovieCard = styled.div`
  height: 225px;
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;

const SCardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: 16px;
  color: ${COLOR.themeWhite};
  transition: background-color 0.3s ease;
  ${SMovieCard}:hover & {
    background-color: ${COLOR.semiTransparentBackground};
  }
  span:nth-child(1) {
    font-size: 1.4rem;
    font-weight: bold;
  }
  span:nth-child(2) {
    font-size: 0.8rem;
    /* Fallback for non-webkit browsers */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* For webkit-based browsers */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

function Card({ title, desc, img }) {
  return (
    <SMovieCard>
      <img src={img} alt={title} />
      <SCardContent>
        <span>{title}</span>
        <span>{desc}</span>
      </SCardContent>
    </SMovieCard>
  );
}

export default Card;
