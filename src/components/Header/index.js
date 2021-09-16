import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Logo, HeaderWrapper, MenuAndUserPic } from "./style";

export default function Header() {
	const { userData } = useContext(UserContext);
	return (
		<HeaderWrapper>
			<Logo />
			<MenuAndUserPic>
				<ion-icon name="chevron-down-outline"></ion-icon>
				<img src={userData.user.avatar} />
			</MenuAndUserPic>
		</HeaderWrapper>
	);
}
