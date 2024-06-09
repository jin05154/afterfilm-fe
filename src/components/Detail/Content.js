import { SContentWrapper, SContentTitle } from "../Common/StyledComponents";

import CardGroup from "../Common/CardGroup";
import PostGroup from "./PostGroup";
import Gallery from "./Gallery";

function Content({ children, type, title }) {
  return (
    <SContentWrapper>
      <SContentTitle>
        <span>{title}</span>
        {/* 더보기 버튼 - 버튼 컴포넌트 생성 필요 */}
        <p>더보기</p>
      </SContentTitle>
      {type === "card" && <CardGroup />}
      {type === "community" && <PostGroup/>}
      {type === "gallery" && <Gallery/>}
      {children}
    </SContentWrapper>
  );
}

export default Content;
