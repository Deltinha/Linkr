import styled from "styled-components";
import { MdLocationOff } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { useState } from "react";


export default function Geolocation() {
    
    const [clicked, setClicked] = useState(false);
    console.log(clicked);
    return (
        <IconBox onClick={() => setClicked(!clicked)} color={clicked ? "#238700" : "#949494"}>
            <IoLocationOutline fontSize="14px" color={clicked ? "#238700" : "#949494"}/>
            <p>Localização {clicked ? "Ativada" : "Desativada"}</p>
        </IconBox>
    );
}


const IconBox = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 300;
    line-height: 16px;
    p {
        color: ${(props) => props.color};
    }
`;
