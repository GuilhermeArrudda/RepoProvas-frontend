import axios from "axios" 

const BASE_URL = process.env.REACT_APP_API

function makeConfig (token: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}

	return config
}

interface userData {
	email: string
	password: string
}

export function signUp(body: userData) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export function login(body: userData) {
	return axios.post(`${BASE_URL}/login`, body)
}

export function validateToken(token: string) {
	const config = makeConfig(token)
	return axios.post(`${BASE_URL}/token`, {}, config)
}

export function getTeachersContent(token: string) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/teachers`, config);
}

export function getTermsContent(token: string) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/terms`, config);
}

export function getCategoriesList(token: any) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/categories`, config);
}

export function getDisciplinesList(token: any) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/disciplines`, config);
}

export function getTeachersList(token: any) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/teachers`, config);
}

export function postNewProve(token: any, info: any) {
	const config = makeConfig(token);
	return axios.post(`${BASE_URL}/tests/create`, info, config);
}

export function getDisciplinesContent(token: any, name: any) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/discipline/${name}`, config);
}

export function getDisciplinesById(token: any, id: any) {
	const config = makeConfig(token);
	return axios.get(`${BASE_URL}/content/disciplines/${id}`, config);
}