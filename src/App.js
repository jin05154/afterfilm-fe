import GlobalStyle from "./GlobalStyle";

/* Pages */
import MainPage from "./pages/DetailPage"; /* 라우팅 전 임시 변경 */

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <MainPage />
      </div>
    </>
  );
}

export default App;
