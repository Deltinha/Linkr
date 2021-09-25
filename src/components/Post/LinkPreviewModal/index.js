import { LinkPreviewWrapper } from "./style";
import { GoX } from "react-icons/go";

export default function LinkPreviewModal ({previewOpen, setPreviewOpen, link, openLink}){
    return (
        <LinkPreviewWrapper
        isOpen={previewOpen}
        onBackgroundClick={()=>setPreviewOpen(false)}
        onEscapeKeydown={()=>setPreviewOpen(false)}>

            <div>
                <button onClick={openLink}>Abrir em nova aba</button>
                <GoX onClick={()=>setPreviewOpen(false)}/>
            </div>
            <iframe src={link}></iframe>
        </LinkPreviewWrapper>
    );
}