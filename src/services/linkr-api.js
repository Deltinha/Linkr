import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr";

function formatToBearer(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

function postSignUp(body) {
	const promise = axios.post(`${BASE_URL}/sign-up`, body);
	return promise;
}

function getAllPosts({ token }) {
	const config = formatToBearer(token);
	const promise = axios.get(`${BASE_URL}/posts`, config);
	return promise;
}

export { postSignUp, getAllPosts };
