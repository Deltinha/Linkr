import "./reset.css";
import "./fonts.css";
import * as S from "./AppStyled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline";
import LogIn from "./screens/LogIn/LogIn";
import { UserContext } from "./contexts/UserContext";
import Hashtag from "./screens/Hashtag";
import Navbar from "./components/Navbar";
import MyLikes from "./screens/MyLikes";
import { ModalProvider } from "styled-react-modal";
import { ModalBackground } from "./components/Post/DeleteButton/style";
import UserPosts from "./screens/UserPosts";
import MyPosts from "./screens/MyPosts";
import { getFollowedByMe } from "./services/linkr-api";
import { useState } from "react";

export default function App() {
	let userID = localStorage.getItem("userID");
	let token = localStorage.getItem("token");
	const [followedUsers, setFollowedUsers] = useState([]);

	function updateFollowedUsers(){
		getFollowedByMe({token})
			.then((res)=>{setFollowedUsers(res.data.users)})
			.catch((err)=>console.log(err.response))
	}

	return (
		<S.App>
			<BrowserRouter>
				<ModalProvider backgroundComponent={ModalBackground}>
					<UserContext.Provider value={{ userID, token, updateFollowedUsers, followedUsers }}>
						<Switch>
							<Route exact path="/">
								<LogIn />
							</Route>

							<Route exact path="/sign-up">
								<SignUp />
							</Route>

							<>
								<Navbar />

								<Route exact path="/timeline">
									<Timeline />
								</Route>

								<Route exact path="/myposts">
									<MyPosts />
								</Route>

								<Route exact path="/mylikes">
									<MyLikes />
								</Route>

								<Route exact path="/user/:id">
									<UserPosts />
								</Route>

								<Route exact path="/hashtag/:hashtag">
									<Hashtag />
								</Route>
							</>
						</Switch>
					</UserContext.Provider>
				</ModalProvider>
			</BrowserRouter>
		</S.App>
	);
}
