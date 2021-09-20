import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr";

function createHeaders(token) {
	const config = { headers: { Authorization: `Bearer ${token}` } };
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

function getTrendingHashtags({token}) {
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

function deletePost({ id, token }){
	const config = createHeaders(token);
	const promise = axios.delete(`${BASE_URL}/posts/${id}`, config);
	return promise;
}

export { 
	postSignUp, 
	postLogIn, 
	getTrendingHashtags, 
	getAllPosts, 
	getUserInfo, 
	postNewPost, 
	getUserPosts,
	getPostsHashtag, 
	releasePost,
	deletePost 
};
