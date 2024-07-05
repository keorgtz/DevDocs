import styled from "styled-components";
import UserCRUD from "../components/UserCRUD";


export function Users(){
    return(
        <Container>
            <UserCRUD />
        </Container>
    );
}

const Container = styled.div`
height: 100vh;
padding: 1.3rem;

`;