import styled from "styled-components";
import StyledButton from "../Boton";

const StyledHeader = styled.header`
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #2a7ae4;
`;

const Header = () => {
    return <StyledHeader>
        <a href="index.html"><img src="./Logo.png" alt="Logo Aluraflix"/></a>
        <StyledButton>Nuevo Video</StyledButton>
    </StyledHeader>
}

export default Header;