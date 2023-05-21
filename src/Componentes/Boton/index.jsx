import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => props.backgroundColor};
    color: #f5f5f5;
    border: 1px solid ${(props) => props.borderColor};
    padding: 1rem 3rem;
    font-size: ${(props) => props.fontSize};
`;

export default StyledButton;
