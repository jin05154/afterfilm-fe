import styled from "styled-components";
import COLOR from "../../utils/color";

const SBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - (50px + 158px) - 20px);
  background-color: ${COLOR.themeBlack};
  padding: 10px 20px;
  overflow: scroll;
`;

function Body({ children }) {
  return <SBodyWrapper>{children}</SBodyWrapper>;
}

export default Body;
