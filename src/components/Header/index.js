import styled from "styled-components";
import logo from "../../assets/logo_linkr.png";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Header() {
	const { userData } = useContext(UserContext);
	return (
		<HeaderWrapper>
			<Logo />
			<MenuAndUserPic></MenuAndUserPic>
		</HeaderWrapper>
	);
}

const Logo = styled.div`
	background-image: url(${logo});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	width: 100px;
	height: 50px;
`;

const HeaderWrapper = styled.div`
	padding: 10px;
	width: 100%;
	height: 72px;
	justify-content: space-between;
	background-color: black;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
`;

const MenuAndUserPic = styled.div``;
