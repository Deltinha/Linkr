import styled from "styled-components";
import logo from "../../assets/logo_linkr.png";

const Logo = styled.div`
	background-image: url(${logo});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	width: 100px;
	height: 50px;
`;

const HeaderWrapper = styled.div`
	padding: 10px 20px;
	width: 100%;
	height: 72px;
	display: flex;
	justify-content: space-between;
	background-color: black;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
`;

const MenuAndUserPic = styled.div`
	display: flex;
	align-items: center;
	ion-icon {
		color: white;
		font-size: 20px;
		margin-right: 10px;
	}
	img {
		width: 53px;
		height: 53px;
		border-radius: 50%;
	}
`;

export { Logo, HeaderWrapper, MenuAndUserPic };
