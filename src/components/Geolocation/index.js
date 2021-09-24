import { IoLocationOutline } from 'react-icons/io5';
import { useEffect, useState } from "react";
import { IconBox } from "./style"

export default function Geolocation({setGeolocation}) {

    const [availableLocation, setAvailableLocation] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            setAvailableLocation(true);
        }else {
            alert("Não foi possivel acessar sua localização");
        }
    }, []);

    function activeLocation() {
        if(availableLocation){
            navigator.geolocation.getCurrentPosition((position) => {
                setClicked(true);
                setGeolocation({
                    latitude: position.coords.latitude,
	            	longitude: position.coords.longitude
                });
            }, () => {
                setClicked(false);
                alert("Erro ao obter localização");
            })
        }
    }

    function disableLocation() {
        setGeolocation({
            latitude: "",
            longitude: ""
        });
        setClicked(false);
    }

    return (
        <IconBox onClick={clicked ? disableLocation : activeLocation} color={clicked ? "#238700" : "#949494"}>
            <IoLocationOutline fontSize="14px" color={clicked ? "#238700" : "#949494"}/>
            <p>Localização {clicked ? "Ativada" : "Desativada"}</p>
        </IconBox>
    );
}

