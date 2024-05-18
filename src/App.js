import GlobalStyle from "./GlobalStyle";

/* Pages */
import MainPage from "./pages/MainPage";

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
