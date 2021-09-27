import {
	LinkPreview,
	LinkDescription,
	LinkTitle,
	LinkTextsContainer,
	LinkCard,
    YtLink,
} from "./style";
import YtEmbedVideo from ".././YtEmbedVideo";
import LinkPreviewModal from "../LinkPreviewModal";
import { useState } from "react";

export default function LinksCard({openLink, linkTitle, linkDescription, link, linkImage}) {
    const [previewOpen, setPreviewOpen] = useState(false);

    return (
        <>
    
            {link.includes('www.youtube.com/watch?v=') ? 
                <>
                    <YtEmbedVideo link={link}/>
                    <YtLink onClick={openLink}>{link}</YtLink>
                </>
                : 
                <LinkCard>
                    <LinkTextsContainer>
                        <LinkTitle onClick={()=>setPreviewOpen(true)}>{linkTitle}</LinkTitle>
                        <LinkDescription>{linkDescription}</LinkDescription>
                        <LinkPreview onClick={()=>setPreviewOpen(true)}>{link}</LinkPreview>
                    </LinkTextsContainer>
                    <img src={linkImage} onClick={()=>setPreviewOpen(true)} alt="imagem ilustrativa do link" />

                    <LinkPreviewModal 
                    previewOpen={previewOpen} 
                    setPreviewOpen={setPreviewOpen} 
                    link={link} 
                    openLink={openLink}
                    title={linkTitle}/>
                </LinkCard>
            }	
        </>
    );
}