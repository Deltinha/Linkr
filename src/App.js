import * as S from "./AppStyled";
import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function App() {
	const [userData, setUserData] = useState({
		token: "5f8eb824-09fe-4ef6-a5ed-a26dbcb1bc10",
		user: {
			id: 3,
			email: "chamas@zipmail.com",
			username: "pinguelo flamejante",
			avatar: "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/3/avatar",
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
