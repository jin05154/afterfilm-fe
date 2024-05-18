import {
  SHeaderLayout,
  SLogo,
  SSearchBox,
  SSearchInput,
  SSignButton,
  SSearchIcon,
} from "./StyledComponents";

import { VscSearch } from "react-icons/vsc";

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
