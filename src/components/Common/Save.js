import { useState } from "react";
import styled from "styled-components";
import COLOR from "../../utils/color";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

function Save() {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Wrapper onClick={handleClick}>
      {isSaved ? (
        <FaBookmark size={20} color={COLOR.themeYellow} />
      ) : (
        <FaRegBookmark size={20} color={COLOR.themeYellow} />
      )}
    </Wrapper>
  );
}

export default Save;

const Wrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
