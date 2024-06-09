import { SBodyWrapper, DBodyWrapper } from "./StyledComponents";

function Body({ children, type }) {
  switch (type){
    default:
      return <SBodyWrapper>{children}</SBodyWrapper>
    case 'main': 
      return <SBodyWrapper>{children}</SBodyWrapper>
    case 'card':
      return <SBodyWrapper>{children}</SBodyWrapper>
    case 'detail':
      return <DBodyWrapper>{children}</DBodyWrapper>
  }
}

export default Body;
