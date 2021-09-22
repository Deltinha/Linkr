import styled from "styled-components";

const Container = styled.div`
	background-color: #171717;
	width: 301px;
	height: 406px;
	border-radius: 16px;
	color: white;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	line-height: 130%;

	@media screen and (max-width: 1230px) {
		display: none;
	}
`;

const Title = styled.span`
	font-family: "Oswald", sans-serif;
	font-weight: 700;
	height: 61px;
	border-bottom: 1px solid #484848;
	font-size: 27px;
	box-sizing: border-box;
	width: 100%;
	display: inline-block;
	padding-left: 16px;
	display: flex;
	align-items: center;
`;

const Hashtags = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: 22px 0 20px 16px;
	a {
		color: white;
		font-size: 19px;
		text-decoration: none;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

const Form = styled.form`
    width: 269px;
    border-radius: 8px;
    margin-left: 16px;
    margin-bottom: 15px;
    background-color: #252525;
    position: relative;
    p{
        font-size: 19px;
        line-height: 23px;
        position: absolute;
        top: 7px;
        left: 13px;
    }
`;

const Input = styled.input`
    height: 35px;
    width: 269px;
    border-radius: 8px;
    border: none;
    color: #575757;
    background-color: #252525;
    padding-left: 36px;
    font-family: Lato;
    font-size: 16px;
    font-style: italic;
    line-height: 19px;
    letter-spacing: 0.05em;
    font-family: Lato;
    :focus {
        box-shadow: none;
        outline: none;
    }
`;

export { 
	Container, 
	Title, 
	Hashtags,
	Form,
	Input
};
