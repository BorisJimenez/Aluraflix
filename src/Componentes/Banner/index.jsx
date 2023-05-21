import styled from "styled-components";

const StyledBanner = styled.div`
    background-color: rgba(0, 18, 51, 0.56);
    background: url(./banner.png) center;
    opacity: 0.75;
    height: 50rem;
    width: 100%;

`;

const Banner = () => {
    return <StyledBanner></StyledBanner>
};

export default Banner;