import { SMovieCard, SCardContent } from "./StyledComponents";

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
