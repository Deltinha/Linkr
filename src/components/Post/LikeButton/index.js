import { useState } from "react";
import { LikeButtonWrapper } from "./style";

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
