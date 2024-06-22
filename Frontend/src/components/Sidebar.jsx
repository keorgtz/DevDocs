import styled from "styled-components";


export function Sidebar({ sidebarOpen, setSidebarOpen }){
    return(
        <Container>
            <div className="LogoContent">
            
            </div>
        </Container>
    );
}

const Container = styled.div`
    color: ${(props) => props.theme.text};

    background: ${(props) => props.theme.bg};
`;