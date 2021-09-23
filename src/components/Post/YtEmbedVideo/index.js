import { YtVideoWrapper } from "./style";
import getYouTubeID from 'get-youtube-id';

export default function YtEmbedVideo ({link}){
    return (
        <YtVideoWrapper
            src={`https://www.youtube-nocookie.com/embed/${getYouTubeID(link)}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </YtVideoWrapper>
    );
}