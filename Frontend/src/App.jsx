import {MyRoutes} from "./routes/routes"
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import {Sidebar} from "./components/Sidebar"
function App() {
  return (
    <div>
        <BrowserRouter>
            <Container>
              <Sidebar/>
                <MyRoutes/>
            </Container>
        </BrowserRouter>
    </div>
  );
}
const Container = styled.div``;
export default App
