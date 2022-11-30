import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
import "./style/App.css";
import GlobalStyles from "./style/GlobalStyle";
import { theme } from "./style/Theme";

function App() {
  console.log(
    "%cThank you for checking up of my portfolio. Wishing you the best for every step in your journey!🎉",
    "color: white; font-weight: 500; font-size:16px"
  );
  console.log(
    "%cYou can check the code here https://github.com/bishalk21/bishal-portfolio",
    "color: white; font-weight: 500; font-size:16px"
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
