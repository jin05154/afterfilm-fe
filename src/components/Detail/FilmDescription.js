import styled from "styled-components";
import COLOR from "../../utils/color";

function FilmDescription() {
  return (
    <Wrapper>
      <Title>{DATA[0].title}</Title>
      <DetailWrapper>
        <Detail>{DATA[0].release}</Detail>
        <Detail>{DATA[0].genre}</Detail>
        <Detail>{DATA[0].country}</Detail>
      </DetailWrapper>
      <DetailWrapper>
        <Detail>{DATA[0].runningtime}</Detail>
        <Detail>{DATA[0].agerate}</Detail>
      </DetailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  color: ${COLOR.themeWhite};
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const Detail = styled.span`
  font-size: 0.8rem;
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
