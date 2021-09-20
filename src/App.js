import "./reset.css";
import * as S from "./AppStyled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline";
import LogIn from "./screens/LogIn/LogIn";
import { UserContext } from "./contexts/UserContext";
import Navbar from "./components/shared/Navbar";
import UserPosts from "./screens/UserPosts";
import MyPosts from "./screens/MyPosts";

export default function App() {
	let userID = localStorage.getItem("userID");
	let token = localStorage.getItem("token");

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
							<Navbar />

							<Route exact path="/timeline">
								<Timeline />
							</Route>

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
