import "./App.css";
import AppRouters from "./Routes";
import { GlobalStyle } from "./components/Global/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouters />
    </>
  );
}

export default App;
