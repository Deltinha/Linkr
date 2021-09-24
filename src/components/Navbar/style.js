import styled from "styled-components";

const Navbar = styled.div`
	position: fixed;
	z-index: 5;
	height: 72px;
	width: 100%;
	background-color: #151515;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 28px;
	padding-right: 17px;
	box-sizing: border-box;
	color: white;
	font-weight: 700;

	& > span {
		font-family: 'Passion One', cursive;
		font-size: 49px;
		font-weight: 700;
		cursor: pointer;

		@media (max-width: 1230px) {
			font-size: 45px;
		}
	}
`;

const NavbarSpacer = styled.div`
	height: 0px;

	@media (max-width: 1230px) {
		height: 40px;
	}
`;

const NavbarMenu = styled.div`
	font-family: "Lato", sans-serif;
	display: flex;
	align-items: center;
	gap: 18px;

	svg {
		font-size: 25px;
		transform: rotate(0);
		cursor: pointer;

		@media (max-width: 1230px) {
			font-size: 20.5px;
		}
	}

	img {
		cursor: pointer;
		width: 53px;
		height: 53px;
		object-fit: cover;
		border-radius: 50%;

		@media (max-width: 1230px) {
			width: 44px;
			height: 44px;
		}
	}
`;

const NavbarLinks = styled.div`
	font-family: "Lato", sans-serif;
	width: 150px;
	background-color: #171717;
	display: flex;
	flex-direction: column;
	gap: 11px;
	align-items: center;
	border-radius: 0 0 0 20px;
	position: absolute;
	right: 0;
	top: 72px;
	padding-top: 10px;
	padding-bottom: 15px;

	@media (max-width: 1230px) {
		gap: 9px;
	}

	span {
		cursor: pointer;
		color: white;
		font-size: 17px;
		text-decoration: none;

		@media (max-width: 1230px) {
			font-size: 15px;
		}
	}
`;

export { Navbar, NavbarMenu, NavbarLinks, NavbarSpacer };
