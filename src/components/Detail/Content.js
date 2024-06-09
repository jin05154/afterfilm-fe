import { SContentWrapper, SContentTitle } from "../Common/StyledComponents";

import CardGroup from "../Common/CardGroup";
import PostGroup from "./PostGroup";
import Gallery from "./Gallery";

const contentMap = {
  card: CardGroup,
  community: PostGroup,
  gallery: Gallery,
};

function Content({ children, type, title }) {
  const ContentType = contentMap[type] || null;
  return (
    <SContentWrapper>
      {ContentType && (
        <>
          <SContentTitle>
            <span>{title}</span>
            {/* 더보기 버튼 - 버튼 컴포넌트 생성 필요 */}
            <p>더보기</p>
          </SContentTitle>
          <ContentType />
        </>
      )}
      {children}
    </SContentWrapper>
  );
}

export default Content;
