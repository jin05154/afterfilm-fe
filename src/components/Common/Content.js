import styled from "styled-components";
import COLOR from "../../utils/color";

import CardGroup from "./CardGroup";

const SContentWrapper = styled.div`
  min-height: 360px;
  width: 1200px;
  // width: 90%;
`;

const SContentTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 40px;
  padding-bottom: 10px;
  color: ${COLOR.themeWhite};
  span {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
`;

function Content({ children, type, title }) {
  return (
    <SContentWrapper>
      <SContentTitle>
        <span>{title}</span>
        {/* 더보기 버튼 - 버튼 컴포넌트 생성 필요 */}
        <p>더보기</p>
      </SContentTitle>
      {type === "card" && <CardGroup />}
      {children}
    </SContentWrapper>
  );
}

export default Content;
