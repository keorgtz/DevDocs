//importando dependencias funciones y componentes asi como los themas claros y oscuros
import { MyRoutes } from "./routes/routes";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import React from "react";
import { useState } from "react";
import { Light, Dark } from "./styles/Themes";

//Creando el contexto del tema
export const ThemeContext = React.createContext(null);
//Creando la app
function App() {
  //Creando el estado del tema
  const [theme, setTheme] = useState("light");
  //Variable para cambiar el tema
  const themeStyle = theme === "light" ? Light : Dark;

  //Funcion para saber si el estado de el Sidebar esta expandido o contraido
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    //Creando el componente
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

//Estilos del contenerdor para el sidebar
const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.3s;
    &.active {
      grid-template-columns: 300px auto;
    }
`;
export default App;
