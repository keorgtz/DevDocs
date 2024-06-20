import { MyRoutes } from "./routes/routes";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import React from "react";
import { Light, Dark } from "./styles/Themes";

export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = React.useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>

        <ThemeProvider theme={themeStyle}>

          <BrowserRouter>
          <Container>
            <Sidebar />
            <MyRoutes />
          </Container>
          </BrowserRouter>
          
        </ThemeProvider>

      </ThemeContext.Provider>
    </div>
  );
}
const Container = styled.div``;
export default App;
