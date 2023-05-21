import styled from "styled-components";
import {CarouselFront, CarouselBack, CarouselGestion } from "../Slider";
import StyledButton from "../../Boton";

const ContenedorFront = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    box-sizing: border-box;
`;

const ContenedorBack = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    box-sizing: border-box;
`;

const ContenedorGestion = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    box-sizing: border-box;
`;

const Encabezado = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    box-sizing: border-box;
`;

const Texto = styled.p`
    color: #fff;
    margin-left: 2rem;
`


const Carrusel = () => {
    return(
    <>
    <ContenedorFront>
        <Encabezado>
            <StyledButton 
                backgroundColor="#6BD1FF" 
                fontSize="2rem"
                borderColor="#6BD1FF">Front End</StyledButton>
            <Texto>Formación Front End de Alura Latam</Texto>
        </Encabezado>
        <CarouselFront />
    </ContenedorFront>,
    <ContenedorBack>
        <Encabezado>
            <StyledButton 
                backgroundColor="#00C86F" 
                fontSize="2rem"
                borderColor="#00C86F">Back End</StyledButton>
            <Texto>Formación Back End de Alura Latam</Texto>
        </Encabezado>
        <CarouselBack />
    </ContenedorBack>,
    <ContenedorGestion>
        <Encabezado>
            <StyledButton 
                backgroundColor="#FE8C2A" 
                fontSize="2rem"
                borderColor="#FE8C2A">Innovación y Gestión</StyledButton>
            <Texto>Formación en Innovación y Gestión End de Alura Latam</Texto>
        </Encabezado>
        <CarouselGestion />
    </ContenedorGestion>
    </>
    );
}

export default Carrusel