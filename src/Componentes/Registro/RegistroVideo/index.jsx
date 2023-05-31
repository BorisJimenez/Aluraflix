import React from 'react';
import styled from "styled-components";
import CampoTexto from '../../TextField';
import StyledButton from '../../Boton';

const BoxRegistroCategoria = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 65rem;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
    box-sizing: border-box;
`


const EncabezadoRegistroCategoria = styled.h2`
    color: #f5f5f5;
    font-size: 3rem;
`

const BoxBoton = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
`

const BoxBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`


const RegistroVideo = (props) => {
return <BoxRegistroCategoria>
<EncabezadoRegistroCategoria>Nuevo Video</EncabezadoRegistroCategoria>
    <CampoTexto 
        id={"filled-basic"} 
        label={"Titulo"} 
        variant={"filled"}
        fullWidth
        required
    />
    <CampoTexto
        id={"filled-basic"} 
        label={"Link del video"} 
        variant={"filled"}
        fullWidth
        required
    />
    <CampoTexto 
        id={"filled-basic"} 
        label={"Link imagen del video"} 
        variant={"filled"}
        fullWidth
        required
    />
    <CampoTexto
        id={"filled-basic"} 
        label={"Escoja una Categoria"} 
        variant={"filled"}
        fullWidth
        required
    />

    <CampoTexto
        id={"filled-basic"} 
        label={"Descripción"} 
        variant={"filled"}
        fullWidth
        required
    />

    <CampoTexto
        id={"filled-basic"} 
        label={"Código de seguridad"} 
        variant={"filled"}
        fullWidth
        required
    />

    <BoxBox>
        <BoxBoton>
            <StyledButton backgroundColor={"#2A7AE4"} borderColor={"#2A7AE4"} fontSize={"1.3rem"}>Guardar</StyledButton>
            <StyledButton backgroundColor={"#53585D"} borderColor={"#53585D"} fontSize={"1.3rem"}>Limpiar</StyledButton>
        </BoxBoton>
        <StyledButton backgroundColor={"#2A7AE4"} borderColor={"#2A7AE4"} fontSize={"1.3rem"}>Nueva Categoría</StyledButton>
    </BoxBox>
    


    </BoxRegistroCategoria>
}

export default RegistroVideo;



