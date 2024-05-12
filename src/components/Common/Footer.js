import styled from "styled-components";
import COLOR from "../../utils/color";

const SFooterLayout = styled.div`
  font-size: 10px;
  color: ${COLOR.themeWhite};
  background-color: ${COLOR.themeBlack};
  padding: 20px 20px 30px;
  border-top: 1px solid ${COLOR.themeWhite};
`;

const Footer = () => {
  return (
    <SFooterLayout>
      <p>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</p>
      <p>고객 센터 cs@afterfilm.co.kr</p>
      <p>주식회사 에필 | 대표 김민지 | 서울특별시 강서구 마곡중앙로 10로 10</p>
      <p>© 2024 by AFTERFILM, Inc. All rights reserved.</p>
    </SFooterLayout>
  );
};
export default Footer;
