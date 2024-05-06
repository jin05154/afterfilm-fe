// TODO: 카드 hover 효과

function Card({ title, desc, img, size }) {
  const cardStyle = {
    height: size === "default" ? "180px" : "360px",
    backgroundImage: `url("${img}")`,
  };

  return (
    <div className="MovieCard" style={cardStyle}>
      <div>
        <span id="MovieCardTitle">{title}</span>
        <span id="MovieCardDesc">{desc}</span>
      </div>
    </div>
  );
}

export default Card;
