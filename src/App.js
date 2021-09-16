import "./reset.css";
import * as S from "./AppStyled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import LogIn from "./screens/LogIn/LogIn";
import { UserContext } from "./contexts/UserContext";
import MyPosts from "./screens/MyPosts";
import UserPosts from "./screens/UserPosts";

export default function App() {
	const userID = localStorage.getItem("userID");
	const token = localStorage.getItem("token");

	return (
		<S.App>
			<BrowserRouter>
				<UserContext.Provider value={{ userID, token }}>
					<Switch>
						<Route exact path="/">
							<LogIn />
						</Route>

						<Route exact path="/sign-up">
							<SignUp />
						</Route>

						<>
							{/* NAVBAR */}
							{/* SIDEBAR */}
							<Route exact path="/timeline"></Route>

							<Route exact path="/myposts">
								<MyPosts />
							</Route>

							<Route exact path="/mylikes"></Route>

							<Route exact path="/user/:id">
								<UserPosts />
							</Route>

							<Route exact path="/hashtag/:hashtag"></Route>
						</>
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</S.App>
	);
}
