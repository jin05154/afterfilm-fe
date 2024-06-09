import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Body from "../components/Common/Body";
import Content from "../components/Detail/Content";

function MainPage() {
  return (
    <>
      <Header />
      <Body>
        <Content type="card" title="컨텐츠 리스트" />
      </Body>
      <Footer />
    </>
  );
}

export default MainPage;
