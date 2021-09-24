import { AiOutlineComment } from "react-icons/ai";
import { IconBox } from "./style"

export default function CommentsButton({count, state, toggleButton}) {

    return (
        <IconBox onClick={() => toggleButton(!state)}>
            <AiOutlineComment fontSize="20px"/>
            <p>{count} {count != 1 ? "comments" : "comment"}</p>
        </IconBox>
    );
}
