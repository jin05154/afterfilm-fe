import styled from "styled-components";
import COLOR from "../../utils/color";

const platformMap = {
  disney: "/images/Disney_icon.png",
  netflix: "/images/Netflix_icon.png",
  watcha: "/images/Watcha_icon.svg",
};

function PlatformInfo({ platform }) {
  return (
    <Wrapper>
      <span>보러가기</span>
      <Platform platform={"watcha"} />
      <Platform platform={"netflix"} />
      <Platform platform={"disney"} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 360px;
  border-radius: 14px;
  padding: 0 20px;
  background-color: ${COLOR.themeGray};
  color: ${COLOR.themeWhite};
  gap: 16px;
`;

const Platform = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-image: ${({ platform }) => `url(${platformMap[platform]})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export default PlatformInfo;
