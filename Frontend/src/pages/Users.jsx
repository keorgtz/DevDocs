import styled from "styled-components";
import  Userlisting  from "../components/listing/Userlist";
export function Users(){
    return(
        <Container>
            <Userlisting/>
        </Container>
    );
}

const Container = styled.div`
height: 100vh;
padding: 1.3rem;

`;