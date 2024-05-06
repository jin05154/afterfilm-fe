import Card from "./Card";

/* Sample data */
const MOVIEDATA = [
  {
    id: 1,
    title: "Air Doll",
    desc: "A life-size blow-up doll comes to life and falls in love with a video store clerk in Kore-eda Hirokazu’s haunting, melancholy meditation on urban alienation.",
    img: "https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/Air-Doll-02.jpg?itok=f7OVtxqK",
  },
  {
    id: 2,
    title: "Bande à part",
    desc: "Godard's playful tribute to the Hollywood pulp crime movies of the 1940s, executed with typically Gallic cool.",
    img: "https://player.bfi.org.uk/sites/default/files/styles/landscape_320x180/public/hero-images/20160116-bande-a-parte-qa-with-anna-karina-1920x1080.jpg?itok=KyN-x9ff",
  },
  {
    id: 3,
    title: "Wild Men",
    desc: "In this razor-sharp black comedy featuring Sofie Gråbøl (The Killing), Martin flees to the mountains in a desperate attempt to cure his midlife crisis.",
    img: "https://player.bfi.org.uk/sites/default/files/styles/landscape_640x360/public/hero-images/Wild_Men_02-1920.jpg?itok=SkqdIu5l",
  },
];

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
