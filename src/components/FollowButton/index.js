
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import { postFollowUser, postUnfollowUser } from "../../services/linkr-api";
import { FollowButtonWrapper } from "./style";
import Loader from "react-loader-spinner";

export default function FollowButton(){
    const token = localStorage.getItem("token");
    const { id } = useParams();
    const {updateFollowedUsers} = useContext(UserContext);
	const {followedUsers} = useContext(UserContext);
	const followedUsersString = JSON.stringify(followedUsers);
    const [followingUser, setFollowingUser] = useState(false);
    const [disabledButton, setDisabledButton] = useState(false);

	function followUser (){
        setDisabledButton(true);
		postFollowUser({token, userID: id})
			.then((res)=>{
                setDisabledButton(false);
                setFollowingUser(true);
            })
			.catch((err)=>{
                setDisabledButton(false);
                alert('não foi possível seguir o usuário')
            })
	}

    function unfollowUser (){
        setDisabledButton(true);
		postUnfollowUser({token, userID: id})
			.then((res)=>{
                setDisabledButton(false);
                setFollowingUser(false);
            })
			.catch((err)=>{
                setDisabledButton(false);
                alert('não foi possível deixar de seguir o usuário')
            })
	}

    function verifyIsUserFollowed(){
		return Boolean(
			followedUsers.find((user)=>user.id === Number(id))
		);
	}

    useEffect(()=>{
		updateFollowedUsers();
		setFollowingUser(verifyIsUserFollowed());
		
	}, [token, id, followedUsersString]);

    return (
        <FollowButtonWrapper 
        onClick={followingUser ? unfollowUser : followUser}
        disabled={disabledButton}>
            {
                disabledButton ?
                <Loader type="ThreeDots" color="#FFF" height={10} />
                :
                followingUser ? 'Unfollow' : 'Follow'
            }
            
        </FollowButtonWrapper>
    );
}