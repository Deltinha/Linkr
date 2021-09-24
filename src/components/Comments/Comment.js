import { useHistory } from "react-router-dom";
import { CardComment, ContentComment } from "./style";

export default function Comment({data, id, follows}) {

    const history = useHistory();

    return (
        <CardComment>
            {data.comments ? <>
                {data.comments.map((userComment, index) => (
                    <ContentComment key={index}>
                        <img 
                            src={userComment.user.avatar} 
                            onClick={() => history.push(`/user/${userComment.user.id}`)} 
                            alt=""
                        />
                        <div>
                            <h6 onClick={() => history.push(`/user/${userComment.user.id}`)}>{userComment.user.username}
                                <span>{userComment.user.id === id ? " • post’s author" : follows.map((e) => e.id).includes(userComment.user.id) ? " • following" : ""}</span>
                            </h6>
                            <p>{userComment.text}</p>
                        </div>
                    </ContentComment>
                ))}
                </>
            :
               ""
            }
        </CardComment>
    );
}
