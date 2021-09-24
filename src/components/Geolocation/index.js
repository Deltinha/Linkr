import styled from "styled-components";
import { IoLocationOutline } from 'react-icons/io5';
import { useEffect, useState } from "react";


export default function Geolocation({setGeolocation}) {

    const [availableLocation, setAvailableLocation] = useState(false);
    const [clicked, setClicked] = useState(false);
    console.log(clicked);

    useEffect(() => {
        if ("geolocation" in navigator) {
            setAvailableLocation(true);
        }
    }, []);

    function activeLocation() {
        
        if(availableLocation) {
            console.log("avaliavel");
            setClicked(true);
        }

        if(availableLocation){
            let lati;
            let long;
            navigator.geolocation.getCurrentPosition((position) => {
                lati = position.coords.latitude;
                long = position.coords.longitude;
                setGeolocation({
                    latitude: lati,
	            	longitude: long
                })
                console.log(lati, long);
            }, () => {
                setClicked(false);
                alert("Erro ao obter localização");
            })
        }
    }


    return (
        <IconBox onClick={clicked ? () => setClicked(false) : activeLocation} color={clicked ? "#238700" : "#949494"}>
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
