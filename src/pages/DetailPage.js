import Body from "../components/Common/Body";
import FilmDescription from "../components/Detail/FilmDescription";
import Content from "../components/Detail/Content";

function DetailPage() {
  return (
    <Body>
      <FilmDescription />
      <Content title="감독/출연" />
      <Content type="community" title="게시물" />
      <Content type="gallery" title="갤러리" />
      <Content type="gallery" title="동영상" />
    </Body>
  );
}

export default DetailPage;
