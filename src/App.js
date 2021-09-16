import * as S from "./AppStyled";
import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function App() {
	const [userData, setUserData] = useState({
		token: "",
		user: {
			id: "",
			email: "",
			username: "",
			avatar: "",
		},
	});

	return (
		<S.App>
			<UserContext.Provider value={{ userData, setUserData }}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/"></Route>

						<Route exact path="/sign-up">
							<SignUp />
						</Route>

						<>
							{/* NAVBAR */}
							{/* SIDEBAR */}
							<Route exact path="/timeline"></Route>
							<Timeline />
							<Route exact path="/myposts"></Route>

							<Route exact path="/mylikes"></Route>

							<Route exact path="/user/:id"></Route>

							<Route exact path="/hashtag/:hashtag"></Route>
						</>
					</Switch>
				</BrowserRouter>
			</UserContext.Provider>
		</S.App>
	);
}
