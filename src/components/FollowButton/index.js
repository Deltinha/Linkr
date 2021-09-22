
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import UserContext from "../../contexts/UserContext";
import { postFollowUser } from "../../services/linkr-api";
import { FollowButtonWrapper } from "./style";

export default function FollowButton(){
    const token = localStorage.getItem("token");
    const { id } = useParams();
    const {updateFollowedUsers} = useContext(UserContext);
	const {followedUsers} = useContext(UserContext);
	const followedUsersString = JSON.stringify(followedUsers);
    const [followingUser, setFollowingUser] = useState(false)

	function followUser (){
		postFollowUser({token, userID: id})
			.then((res)=>setFollowingUser(true))
			.catch((err)=>console.log(err.response))
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
        <FollowButtonWrapper>
            Segue eu
        </FollowButtonWrapper>
    );
}