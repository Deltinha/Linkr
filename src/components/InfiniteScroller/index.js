import { useState, useRef } from "react";
import Post from "../Post";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../Loader";

export default function InfiniteScroller({ getMoreFunction, fetchPosts, posts, setPosts }) {
	const [hasMore, setHasMore] = useState(true);
	const token = localStorage.getItem("token");

	const observer = useRef();

	function getLastPostId() {
		const lastPost = posts[posts.length - 1];
		console.log({ lastPost });

		if (lastPost.repostId) {
			return lastPost.repostId;
		}

		return lastPost.id;
	}

	function loadMoreHandler() {
		const lastPostId = getLastPostId();
		getMoreFunction({ token, lastPostId }).then(
			(res) => {
				console.log({ res });
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
			loader={<Loader message="Loading more Posts..." />}
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
