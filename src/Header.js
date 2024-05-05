import { VscSearch } from "react-icons/vsc";

const Header = () => {
    return (
        <div className="headerLayout">
            <a 
            className="logo"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            >애프터 필름</a>
            <label className="searchBox">
                <VscSearch className="searchIcon"/>
                <input className="searchInput" type="text" placeholder="영화, 배우, 게시물을 검색해보세요."/>
            </label>
            <button className="signButton">Sign In</button>
        </div>
    )
}
export default  Header