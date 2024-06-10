import styled from "styled-components";
import COLOR from "../../utils/color";

import Content from "./Content";
import PlatformInfo from "./PlatformInfo";
import Save from "../Common/Save";

function FilmDescription() {
  return (
    <Content>
      <Wrapper>
        <StillCut url={DATA[0].still} />
        <OverlappingWrapper gap="10px">
          <RowWrapper gap="60px">
            <Poster url={DATA[0].poster} />
            <RowWrapper gap="120px">
              <ColumnWrapper gap="10px">
                <ColumnWrapper>
                  <Save />
                  <Title>{DATA[0].title}</Title>
                </ColumnWrapper>
                <ColumnWrapper>
                  <RowWrapper>
                    <Detail>{DATA[0].release} ·</Detail>
                    <Detail>{DATA[0].genre} ·</Detail>
                    <Detail>{DATA[0].country}</Detail>
                  </RowWrapper>
                  <RowWrapper>
                    <Detail>{DATA[0].runningtime} ·</Detail>
                    <Detail>{DATA[0].agerate}</Detail>
                  </RowWrapper>
                </ColumnWrapper>
              </ColumnWrapper>
              <PlatformInfo />
            </RowWrapper>
          </RowWrapper>
          <Detail>{DATA[0].description}</Detail>
        </OverlappingWrapper>
      </Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 640px;
  padding: 10px 0;
  gap: 10px;
  color: ${COLOR.themeWhite};
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: ${(props) => props.gap || "4px"};
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "2px"};
`;

const OverlappingWrapper = styled(ColumnWrapper)`
  position: absolute;
  width: calc(1200px - 100px);
  padding: 0 50px;
  margin-top: 160px;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const Detail = styled.span`
  font-size: 0.9rem;
  max-width: 1200px;
`;

const Poster = styled.div`
  width: 259px;
  height: 372px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
`;

const StillCut = styled.div`
  position: relative;
  width: inherit;
  height: 400px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: top;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      ${COLOR.gradientBackground},
      transparent
    );
    pointer-events: none;
  }
`;

const DATA = [
  {
    id: 1,
    title: "범죄도시4",
    release: "2023",
    genre: "범죄/액션",
    country: "한국",
    runningtime: "1시간 49분",
    agerate: "15세",
    description:
      "신종 마약 사건 3년 뒤, 괴물형사 ‘마석도’(마동석)와 서울 광수대는 배달앱을 이용한 마약 판매 사건을 수사하던 중 수배 중인 앱 개발자가 필리핀에서 사망한 사건이 대규모 온라인 불법 도박 조직과 연관되어 있음을 알아낸다. 필리핀에 거점을 두고 납치, 감금, 폭행, 살인 등으로 대한민국 온라인 불법 도박 시장을 장악한 특수부대 용병 출신의 빌런 ‘백창기’(김무열)와 한국에서 더 큰 판을 짜고 있는 IT업계 천재 CEO ‘장동철’(이동휘). ‘마석도’는 더 커진 판을 잡기 위해 ‘장이수’(박지환)에게 뜻밖의 협력을 제안하고 광역수사대는 물론, 사이버수사대까지 합류해 범죄를 소탕하기 시작하는데… 나쁜 놈 잡는데 국경도 영역도 제한 없다! 업그레이드 소탕 작전! 거침없이 싹 쓸어버린다!",
    poster:
      "https://an2-img.amz.wtchn.net/image/v2/v15iYLFp0Lk0yFM2LN4LJA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpJeU5qUXhNekl5Tnpnd05UTXpNeUo5LklLNzhEc1JjSmhzQl8xX3p4eVlWS0ZpT21RYnFsU3RGWHJRcVdNRUJLbzg",
    still:
      "https://an2-img.amz.wtchn.net/image/v2/DrlOOGk0fSrt9TwMaj7Kcw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TXpVd01EQTNNell4TnpVeE9DSXNJbkVpT2pnd0xDSjNJam94T1RJd2ZRLnJUQldoeEVtRll2XzgwNE9SR3dZNHFoczBSSG9pcXNPZnhLOE1EWU13ajg",
  },
];

export default FilmDescription;
