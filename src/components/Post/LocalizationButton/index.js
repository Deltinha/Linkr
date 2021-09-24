import styled from "styled-components";
import { MdLocationOn } from 'react-icons/md';

export default function Localization({coordinates}) {

    if(coordinates) console.log(coordinates);

    return (        

        coordinates ?
                <IconBox>
                    <MdLocationOn fontSize="20px"/>
                </IconBox>
            :
                ""
         
    );
}

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    cursor: pointer;
    width: 100px;
`;