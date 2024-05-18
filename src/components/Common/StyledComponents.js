import styled from "styled-components";
import COLOR from "../../utils/color";

/* Header */
export const SHeaderLayout = styled.div`
  background-color: ${COLOR.themeBlack};
  height: 30px;
  padding: 10px 20px;
  border-bottom: 1px solid ${COLOR.themeWhite};
`;

export const SLogo = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: ${COLOR.themeYellow};
  position: absolute;
  top: 4px;
  left: 10px;
`;

export const SSearchBox = styled.label`
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

export const SSearchInput = styled.input`
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

export const SSignButton = styled.button`
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

export const SSearchIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 3px;
`;

/* Footer */
export const SFooterLayout = styled.div`
  font-size: 10px;
  color: ${COLOR.themeWhite};
  background-color: ${COLOR.themeBlack};
  padding: 20px 20px 30px;
  border-top: 1px solid ${COLOR.themeWhite};
`;

/* Body */
export const SBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - (50px + 158px) - 20px);
  background-color: ${COLOR.themeBlack};
  padding: 10px 20px;
  overflow: hidden;
`;

/* Content */
export const SContentWrapper = styled.div`
  min-height: 360px;
  width: 1200px;
  // width: 90%;
`;

export const SContentTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  height: 40px;
  padding-bottom: 10px;
  color: ${COLOR.themeWhite};
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
  }
`;

/* Card */
export const SMovieCard = styled.div`
  height: 225px;
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;

export const SCardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: 16px;
  color: ${COLOR.themeWhite};
  transition: background-color 0.3s ease;
  ${SMovieCard}:hover & {
    background-color: ${COLOR.semiTransparentBackground};
  }
  span:nth-child(1) {
    font-size: 1.4rem;
    font-weight: bold;
  }
  span:nth-child(2) {
    font-size: 0.8rem;
    /* Fallback for non-webkit browsers */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* For webkit-based browsers */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

/* Card Group */
export const SCardWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  height: 225px;
  width: 1200px;
`;