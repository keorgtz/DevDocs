import { MyRoutes } from "./routes/routes";
import { MyLoginRoute } from "./routes/routes";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./components/Login";
import React, { useState } from "react";
import { Light, Dark } from "./styles/Themes";

// Creando el contexto del tema
export const ThemeContext = React.createContext(null);

// Creando la app
function App() {
  // Creando el estado del tema
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar el login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Función para saber si el estado del Sidebar está expandido o contraído
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/*"
              element={
                isAuthenticated ? (
                  <Container className={sidebarOpen ? "sidebarState active" : ""}>
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <MyRoutes />
                  </Container>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 6rem auto;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.3s;
  &.active {
    grid-template-columns: 18rem auto;
  }
  color: ${({ theme }) => theme.text};
`;

export default App;