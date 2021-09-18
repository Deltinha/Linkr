import { LikeButtonWrapper } from "./style";

export default function LikeButton({ toggleSelection, likedByMe}) {
	return (
		<LikeButtonWrapper selected={likedByMe} onClick={toggleSelection}>
			{likedByMe ? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}
		</LikeButtonWrapper>
	);
}
