import { CancelButton, ConfirmButton, DeleteButtonWrapper, DeleteModal, ModalText } from "./style";
import { useState } from "react";
import { MdRepeat } from 'react-icons/md';
import styled from "styled-components";
import Modal from "react-modal";
import Loader from "react-loader-spinner";

export default function RePost() {

    const [clicked,setClicked]=useState(false);
    const [waiting, setWaiting] = useState(false);
    const [text,setText] = useState("");
    const token = localStorage.getItem('token');
    const user = localStorage.getItem("userID");


    function printa(){
        setClicked(true)
        console.log("apertou");
    }

    return (
        <>
        <IconBox>
            <MdRepeat fontSize="20px"  onClick={printa} />
            <p>0 re-posts</p>
        </IconBox>
            <DeleteModal
                isOpen={clicked}
                onBackgroundClick={()=>setClicked(false)}
                onEscapeKeydown={()=>setClicked(false)}
            >

                <ModalText>Do you want to re-post this link?</ModalText>

                <div>
                    <CancelButton onClick={()=> setClicked(false)}>No, cancel</CancelButton>

                    <ConfirmButton>
                        {
                            'Yes, share!'
                        }
                    </ConfirmButton>
                </div>       
            </DeleteModal>
           
        </>
      
    );
}

const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 25px;
    background-color: red;
`;