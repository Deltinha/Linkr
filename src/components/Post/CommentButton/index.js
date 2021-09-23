import styled from "styled-components";
import { AiOutlineComment, IoIosSend } from "react-icons/ai";

export default function CommentsButton({count}) {

    return (
        <IconBox>
            <AiOutlineComment fontSize="20px"/>
            <p>{count} {count != 1 ? "comments" : "comment"}</p>
        </IconBox>
    );
}


const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 80px;
`;