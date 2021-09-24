import {
	LinkPreview,
	LinkDescription,
	LinkTitle,
	LinkTextsContainer,
	LinkCard,
    YtLink,
} from "./style";
import YtEmbedVideo from ".././YtEmbedVideo";

export default function LinksCard({openLink, linkTitle, linkDescription, link, linkImage}) {

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
                        <LinkTitle onClick={openLink}>{linkTitle}</LinkTitle>
                        <LinkDescription>{linkDescription}</LinkDescription>
                        <LinkPreview onClick={openLink}>{link}</LinkPreview>
                    </LinkTextsContainer>
                    <img src={linkImage} onClick={openLink} alt="imagem ilustrativa do link" />
                </LinkCard>
            }	
        </>
    );
}