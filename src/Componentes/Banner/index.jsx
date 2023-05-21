import styled from "styled-components";

const StyledBanner = styled.div`
    position: relative;
    height: 50rem;
    width: 100%;
    display: flex;
    align-items: end;
    padding: 0 2rem 4rem 2rem;
    box-sizing: border-box;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(./banner.png) center;
opacity: 0.2;
  }
`;

const ContenedorBanner = styled.div`
    margin-right: 3rem;
`

const Titulo = styled.h2`
    Color:#F5F5F5;
    font-size: 3rem;
`

const Parrafo = styled.p`
    Color:#F5F5F5;
`

const ThumbnailImage = styled.img`
  width: 35%;
  height: 40%;
  border-radius: 2px;
  border: 3px solid ${(props) => props.borderColor};
  opacity: 1;
`;

const Banner = () => {
    const thumbnailUrl = `https://img.youtube.com/vi/ov7vA5HFe6w/0.jpg`;
    return <StyledBanner>
        <ContenedorBanner>
            <Titulo>Challenge React</Titulo>
            <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
        </ContenedorBanner>
        <ThumbnailImage src={thumbnailUrl} alt="YouTube Thumbnail" borderColor="#6BD1FF"/>
    </StyledBanner>
};

export default Banner;