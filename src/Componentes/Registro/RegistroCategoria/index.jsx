import React from 'react';
import styled from "styled-components";
import CampoTexto from '../../TextField';
import StyledButton from '../../Boton';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

const BoxRegistroCategoria = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70rem;
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
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
`

const StyledTableContainer = styled(TableContainer)`
    margin-top: 2rem;
    width: 100%;
    background-color: black;
`

const StyledTable = styled(Table)`
    color: white; 
`;

const StyledTh = styled(Th)`
    color: white; 
    font-size: 2rem;
    text-align: start;
    width: 30%;
    background: #2e2e2e;
`;

const StyledTd = styled(Td)`
    color: white;
    font-size: 1.3rem; 
    width: 30%;
    background: #2e2e2e;
`;


const RegistroCategoria = (props) => {
return <BoxRegistroCategoria>
    <EncabezadoRegistroCategoria>Nueva Categoría</EncabezadoRegistroCategoria>
    <CampoTexto 
        id={"filled-basic"} 
        label={"Nombre"} 
        variant={"filled"}
        fullWidth
        required
    />
    <CampoTexto
        id={"filled-basic"} 
        label={"Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente"} 
        variant={"filled"}
        fullWidth
        required
    />
    <CampoTexto 
        id={"filled-basic"}
        label={"Color"} 
        variant={"filled"}
        type={"color"}
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

    <BoxBoton>
        <StyledButton backgroundColor={"#2A7AE4"} borderColor={"#2A7AE4"} fontSize={"1.3rem"}>Guardar</StyledButton>
        <StyledButton backgroundColor={"#53585D"} borderColor={"#53585D"} fontSize={"1.3rem"}>Limpiar</StyledButton>
    </BoxBoton>

<StyledTableContainer>
        <StyledTable variant='simple'>
            <Thead>
            <Tr>
                <StyledTh>Nombre</StyledTh>
                <StyledTh>Descripión</StyledTh>
                <StyledTh>Editar</StyledTh>
                <StyledTh>Remover</StyledTh>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <StyledTd>Back End</StyledTd>
                <StyledTd>Todos los video que estoy usando para estudiar Back End</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Mobile</StyledTd>
                <StyledTd>Contenido que vengo estudiando sobre React Native y Flutter</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Infraestructura</StyledTd>
                <StyledTd>Todo lo que estoy aprendiendo sobre Docker y mucho mas</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Data Science</StyledTd>
                <StyledTd>Cosas de React y Python que vengo aprendiendo</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Desing & UX</StyledTd>
                <StyledTd>Herramientas y técnicas que estudio sobre UX y Design</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Marketing Digital</StyledTd>
                <StyledTd>La forma de vender y monetizar mis ideas</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            <Tr>
                <StyledTd>Innovación & Gestión</StyledTd>
                <StyledTd>Como mantener el equipo felíz y mucho mas</StyledTd>
                <StyledTd>Editar</StyledTd>
                <StyledTd>Remover</StyledTd>
            </Tr>
            </Tbody>
        </StyledTable>
    </StyledTableContainer>

    </BoxRegistroCategoria>
}

export default RegistroCategoria;



