import { MdRepeat } from 'react-icons/md';
import { RepostUser } from "./style";

export default function HeadPost({data, fetchPosts, userID}) {

    return (
        <>
            {data.repostedBy ? 
                    <RepostUser fetchPosts={fetchPosts}>
                        <MdRepeat fontSize="20px"/>
                        <p>Re-posted by <span>{
                            (data.repostedBy.id === Number(userID) ? "you" : data.repostedBy.username)}</span>
                        </p>
                    </RepostUser>
                :
                    "" 
            }
        </>
    );
}