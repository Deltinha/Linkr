import { CancelButton, ConfirmButton, DeleteButtonWrapper, DeleteModal } from "./style";
import { FaTrash } from "react-icons/fa";
import { deletePost } from "../../../services/linkr-api";
//import ReactModal from "react-modal";

// const modalStyles = {
//     overlay: {
//       backgroundColor: 'rgba(255,255,255,0.9)',
//       zIndex: '6',
//     },
//     content: {
//       backgroundColor: '#333333',
//       color: 'lightsteelblue',
//       borderRadius: '50px',
//       width: '597px',
//       height: '262px',
//       left: '50%',
//       top: '50%',
//       transform: 'translate(-50%,-50%)',
//       fontSize: '34px',
//       lineWeight: '700',
//     }
//   };

export default function DeleteButton({id}){
    const token = localStorage.getItem('token');

    function deleteConfirmation(){
        if (window.confirm('deletar?')) {
            deletePost({id, token})
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err.response));
        }
    }
    
    return (
        <DeleteButtonWrapper >
            <FaTrash onClick={deleteConfirmation}/>

            <DeleteModal
            isOpen={false}>
                
                    <span>Tem certeza que deseja excluir essa publicação?</span>

                    <div>
                        <CancelButton>Não, voltar</CancelButton>
                        <ConfirmButton>Sim, excluir</ConfirmButton>
                    </div>
                
            </DeleteModal>
    
        </DeleteButtonWrapper>
    );
}