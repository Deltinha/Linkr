import { CancelButton, ConfirmButton, DeleteButtonWrapper, DeleteModal, ModalText } from "./style";
import { FaTrash } from "react-icons/fa";
import { deletePost } from "../../../services/linkr-api";
import { useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function DeleteButton({id, fetchPosts}){
    const token = localStorage.getItem('token');
    const [isOpen, setIsOpen] = useState(false);
    const [requestLoading, setRequestLoading] = useState(false);

    function sendDeleteRequest(){
            setRequestLoading(true);
            deletePost({id, token})
            .then(()=>{
                setIsOpen(false);
                setRequestLoading(false);
                fetchPosts();
            })
            .catch(()=>{
                setIsOpen(false);
                setRequestLoading(false);
                alert('não foi possível excluir o post.');
            });
    }
    
    return (
        <DeleteButtonWrapper >
            <FaTrash onClick={()=>setIsOpen(true)}/>

            <DeleteModal
            isOpen={isOpen}
            onBackgroundClick={()=>setIsOpen(false)}
            onEscapeKeydown={()=>setIsOpen(false)}>
                
                    <ModalText>Tem certeza que deseja excluir essa publicação?</ModalText>

                    <div>
                        <CancelButton  onClick={()=>setIsOpen(false)}>Não, voltar</CancelButton>

                        <ConfirmButton 
                        disabled={requestLoading} 
                        lightColor={requestLoading}
                        onClick={sendDeleteRequest}>
                            {
                                requestLoading ?
                                <Loader type="ThreeDots" color="#FFF" height={30} />
                                :
                                'Sim, excluir'
                            }
                        </ConfirmButton>
                    </div>       
            </DeleteModal>
    
        </DeleteButtonWrapper>
    );
}