import Body from "../components/Common/Body";
import FilmHeader from "../components/Detail/FilmHeader";
import Content from "../components/Detail/Content";

function DetailPage() {
  return (
    <Body>
      <FilmHeader />
      <Content title="감독/출연" />
      <Content type="community" title="게시물" />
      <Content type="gallery" title="갤러리" />
      <Content type="gallery" title="동영상" />
    </Body>
  );
}

export default DetailPage;
