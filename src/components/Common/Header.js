import styled from "styled-components";
import COLOR from "../../utils/color";

import { VscSearch } from "react-icons/vsc";

const SHeaderLayout = styled.div`
  background-color: ${COLOR.themeBlack};
  height: 30px;
  padding: 10px 20px;
  border-bottom: 1px solid ${COLOR.themeWhite};
`;

const SLogo = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: ${COLOR.themeYellow};
  position: absolute;
  top: 4px;
  left: 10px;
`;

const SSearchBox = styled.label`
  position: absolute;
  top: 5px;
  right: 100px;
  height: 27px;
  width: 250px;
  background-color: white;
  border-radius: 7px;
  &:hover {
    outline: 2px solid ${COLOR.themeYellow};
  }
`;

const SSearchInput = styled.input`
  position: absolute;
  top: 2.5px;
  right: 17px;
  height: 20px;
  width: 200px;
  border: 0px;
  font-family: sans-serif;
  &:focus {
    outline: none;
  }
`;

const SSignButton = styled.button`
  position: absolute;
  top: 4px;
  right: 17px;
  height: 27px;
  width: 75px;
  border: 0px;
  background-color: ${COLOR.themeBeige};
  border-radius: 7px;
  font-size: 15px;
  &:hover {
    background-color: ${COLOR.themeYellow};
  }
`;

const SSearchIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 3px;
`;

const Header = () => {
  return (
    <SHeaderLayout>
      <SLogo href="/" target="_blank" rel="noopener noreferrer">
        애프터필름
      </SLogo>
      <SSearchBox>
        <SSearchIcon>
          <VscSearch style={{ width: "20px", height: "20px" }} />
        </SSearchIcon>
        <SSearchInput
          type="text"
          placeholder="영화, 배우, 게시물을 검색해보세요."
        />
      </SSearchBox>
      <SSignButton>Sign In</SSignButton>
    </SHeaderLayout>
  );
};
export default Header;
