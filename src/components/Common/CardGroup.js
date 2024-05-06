import Card from "./Card";

import MOVIEDATA from "../../assets/mockData";

function CardGroup() {
  return (
    <div className="CardWrapper">
      <Card
        title={MOVIEDATA[2].title}
        desc={MOVIEDATA[2].desc}
        img={MOVIEDATA[2].img}
        size="large"
      />
      <div>
        <Card
          title={MOVIEDATA[0].title}
          desc={MOVIEDATA[0].desc}
          img={MOVIEDATA[0].img}
          size="default"
        />
        <Card
          title={MOVIEDATA[1].title}
          desc={MOVIEDATA[1].desc}
          img={MOVIEDATA[1].img}
          size="default"
        />
      </div>
    </div>
  );
}

export default CardGroup;
