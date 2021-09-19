import { DeleteButtonWrapper } from "./style";
import { FaTrash } from "react-icons/fa";
import { deletePost } from "../../../services/linkr-api";

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
        <DeleteButtonWrapper onClick={deleteConfirmation}>
            <FaTrash />
        </DeleteButtonWrapper>
    );
}