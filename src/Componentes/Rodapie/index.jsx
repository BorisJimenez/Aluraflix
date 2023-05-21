import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem ;
    box-sizing: border-box;
    border-top: 1px solid #2a7ae4;
`;

const Footer = () => {
    return <StyledFooter>
        <a href="index.html"><img src="./Logo.png" alt="Logo Aluraflix"/></a>
    </StyledFooter>
};

export default Footer;