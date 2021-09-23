import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr";

/**
 * Max number of posts that the API will send back from the GET request
 */
const RESPONSE_LIMIT = 50;

function createHeaders(token) {
	const config = { headers: { Authorization: `Bearer ${token}` } };
	return config;
}

function createLimitHeaders(token) {
	const config = {
		params: { limit: RESPONSE_LIMIT },
		headers: { Authorization: `Bearer ${token}` },
	};
	return config;
}

function postSignUp(body) {
	const promise = axios.post(`${BASE_URL}/sign-up`, body);
	return promise;
}

function getAllPosts({ token }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/posts`, config);
	return promise;
}

function postLogIn(body) {
	const promise = axios.post(`${BASE_URL}/sign-in`, body);
	return promise;
}

function getTrendingHashtags({ token }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/hashtags/trending`, config);
	return promise;
}

function getUserPosts({ token, userID }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/users/${userID}/posts`, config);
	return promise;
}

function getUserInfo({ token, userID }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/users/${userID}`, config);
	return promise;
}

function getLikedPosts({ token }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/posts/liked`, config);
	return promise;
}

function getPostsHashtag(hashtag, token) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/hashtags/${hashtag}/posts`, config);
	return promise;
}

function postNewPost(body, token) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/posts`, body, config);
	return promise;
}

function releasePost(id, body, token) {
	const config = createHeaders(token);
	const promise = axios.put(`${BASE_URL}/posts/${id}`, body, config);
	return promise;
}

function deletePost({ id, token }) {
	const config = createHeaders(token);
	const promise = axios.delete(`${BASE_URL}/posts/${id}`, config);
	return promise;
}

function postLike({ id, token }) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/posts/${id}/like`, {}, config);
	return promise;
}

function postDislike({ id, token }) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/posts/${id}/dislike`, {}, config);
	return promise;
}

function getFollowedByMe({ token }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/users/follows`, config);
	return promise;
}

function postFollowUser({ token, userID }) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/users/${userID}/follow`, {}, config);
	return promise;
}

function postUnfollowUser({ token, userID }) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/users/${userID}/unfollow`, {}, config);
	return promise;
}

function getFollowingPosts({ token }) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/following/posts`, config);
	return promise;
}

function getFollowingPostsOlderThan({ token, lastPostID }) {
	const config = createLimitHeaders(token);
	const promise = axios.get(`${BASE_URL}/following/posts?olderThan=${lastPostID}`, config);
	return promise;
}

function getFollowingPostsEarlierThan({ token, firstPostID }) {
	const config = createLimitHeaders(token);
	const promise = axios.get(`${BASE_URL}/following/posts?earlierThan=${firstPostID}`, config);
	return promise;
}

export {
	postSignUp,
	postLogIn,
	getAllPosts,
	getTrendingHashtags,
	getUserInfo,
	postNewPost,
	getUserPosts,
	getPostsHashtag,
	postLike,
	postDislike,
	releasePost,
	getLikedPosts,
	deletePost,
	getFollowedByMe,
	postFollowUser,
	postUnfollowUser,
	getFollowingPosts,
	getFollowingPostsOlderThan,
	getFollowingPostsEarlierThan,
};
