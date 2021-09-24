import styled from "styled-components";
import { CancelButton, ConfirmButton, DeleteModal, ModalText } from "../../shared/CommonStyled";
import { useState } from "react";
import Modal from "styled-react-modal";
import { MdLocationOn, MdClose } from 'react-icons/md';

export default function Localization({coordinates, user}) {
    const [clicked,setClicked] = useState(false);
    if(coordinates) console.log(coordinates);
    console.log(clicked);
    return (        

        coordinates ?
        <>
                <IconBox onClick={() => setClicked(true)}>
                    <MdLocationOn fontSize="20px"/>
                </IconBox>
                <MapModal
                    isOpen={clicked}
                    onBackgroundClick={()=>setClicked(false)}
                    onEscapeKeydown={()=>setClicked(false)}
                >
                <Content>
                    <div>
                        <h3>{user}'s location</h3>
                        <IconBox>
                            <MdClose onClick={() => setClicked(false)}
                                color="#fff"
                                fontSize="38px" 
                            />
                        </IconBox>
                        
                    </div>
                </Content>
                </MapModal>
             </>
            :
                ""
         
    );
}

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
`;

const Content = styled.div`
    background-color: red;
    width: 100%;
    div {
        display: flex;
        justify-content: space-between;
    }
    h3 {
        font-family: "Oswald";
        font-size: 30px;
        color: #fff;
    }
`;

const MapModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #333333;
  width: 597px;
  height: 262px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 18px 37px 33px 37px;
  border-radius: 20px;

  @media (max-width: 640px){
    width: 355px;
    height: 210px;
    padding: 30px 10px 40px 10px;
  }
`;
