import { useHistory } from "react-router-dom";
import ReactHashtag from "react-hashtag";
import EditPost from "../../EditPost";
import DeleteButton from ".././DeleteButton";
import {
	Hashtag,
	PostText,
} from ".././style";

export default function DescriptionPost({postId, userID, data, fetchPosts, id, text}) {

    const history = useHistory();

    function openHashtag(hashtag) {
		const formattedHashtag = hashtag.substring(1, hashtag.length);
		history.push(`/hashtag/${formattedHashtag}`);
	}

    return (
        <>
            {postId === Number(userID) ? (
                <>
                    <EditPost data={data} fetchPosts={fetchPosts} />
                    <DeleteButton fetchPosts={fetchPosts} id={id} />
                </>
            ) : (
                <PostText>
                    <ReactHashtag
                        renderHashtag={(hashtagValue) => (
                            <Hashtag onClick={() => openHashtag(hashtagValue)}>{hashtagValue}</Hashtag>
                        )}
                    >
                        {text}
                    </ReactHashtag>
                </PostText>
            )}
        </>
    );
}