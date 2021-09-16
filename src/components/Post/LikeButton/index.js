import styled from "styled-components";
import { useState } from "react";

export default function LikeButton({ toggleSelection, wasLikedByMe }) {
	const [isSelected, setIsSelected] = useState(wasLikedByMe);

	function toggleLike() {
		toggleSelection(isSelected);
		setIsSelected(() => !isSelected);
	}

	return (
		<LikeButtonWrapper selected={isSelected} onClick={toggleLike}>
			{isSelected ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
		</LikeButtonWrapper>
	);
}

const LikeButtonWrapper = styled.div`
	width: 100%;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => (props.selected ? "#AC0000" : "#FFFFFF")};
	margin-top: 20px;
	margin-bottom: 5px;
	font-size: 20px;
`;
