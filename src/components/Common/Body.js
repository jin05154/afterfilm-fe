import { SBodyWrapper, DBodyWrapper } from "./StyledComponents";

function Body({ children, type }) {
  if(type == null) type = 'main'
  switch (type){
    case 'main': 
      return <SBodyWrapper>{children}</SBodyWrapper>
    case 'detail':
      return <DBodyWrapper>{children}</DBodyWrapper>
  }
}

export default Body;
