import CardGroup from "./CardGroup";

function Content({ children, type, title }) {
  return (
    <div className="ContentWrapper" {...{ type }}>
      <div className="ContentTitle">
        <span>{title}</span>
        {/* 더보기 버튼 - 버튼 컴포넌트 생성 필요 */}
        <p>더보기</p>
      </div>
      {type === "card" && <CardGroup />}
      {children}
    </div>
  );
}

export default Content;
