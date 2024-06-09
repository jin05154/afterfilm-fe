import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Body from "../components/Common/Body";
import Content from "../components/Detail/Content";

function DetailPage() {
  return (
    <>
      <Header />
      <Body>
       <Content type="detail" title= "감독/출연" />
       <Content type="community" title= "게시물" />
       <Content type="gallery" title= "갤러리" />
       <Content type="detail" title= "동영상" /> 
      </Body>
      <Footer />
    </>
  );
}

export default DetailPage;
