import "./reset.css";
import * as S from "./AppStyled";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp/SignUp";
import Timeline from "./screens/Timeline";
import LogIn from "./screens/LogIn/LogIn";
import { UserContext } from "./contexts/UserContext";
import Navbar from "./components/shared/Navbar";
import Hashtag from "./screens/Hashtag";

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
							<Navbar />
							{/* SIDEBAR */}
							<Route exact path="/timeline">
								<Timeline />
							</Route>

							<Route exact path="/myposts"></Route>

							<Route exact path="/mylikes"></Route>

							<Route exact path="/user/:id"></Route>

							<Route exact path="/hashtag/:hashtag">
								<Hashtag/>
							</Route>
						</>
					</Switch>
				</UserContext.Provider>
			</BrowserRouter>
		</S.App>
	);
}
