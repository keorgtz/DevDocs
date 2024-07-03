import styled from "styled-components";
import Productlist from "../components/listing/Productlist";
export function Products(){
    return(
        <Container>
            <Productlist/>  
        </Container>
    );
}

const Container = styled.div`
height: 100vh;
padding: 1.3rem;
`;