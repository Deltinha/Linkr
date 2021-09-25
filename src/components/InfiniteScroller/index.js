import { useState, useRef } from "react";
import Post from "../Post";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../Loader";

export default function InfiniteScroller({ getMorePostsFunction, fetchPosts, posts, setPosts }) {
	const [hasMore, setHasMore] = useState(true);
	const token = localStorage.getItem("token");

	function getLastPostId() {
		const lastPost = posts[posts.length - 1];
		if (lastPost.repostId) {
			return lastPost.repostId;
		}
		return lastPost.id;
	}

	function loadMoreHandler() {
		const lastPostId = getLastPostId();
		getMorePostsFunction({ token, lastPostId }).then(
			(res) => {
				if (res.data.posts.length === 0) {
					setHasMore(false);
				}
				setPosts([...posts, ...res.data.posts]);
			},
			(err) => console.log({ err })
		);
	}

	return (
		<InfiniteScroll
			loadMore={loadMoreHandler}
			hasMore={hasMore}
			loader={<Loader message="Loading more Posts..." type="TailSpin" />}
		>
			{posts.map((post, index) => (
				<Post
					fetchPosts={fetchPosts}
					key={index}
					data={post}
					poster={post.user}
					likes={post.likes}
				/>
			))}
		</InfiniteScroll>
	);
}
