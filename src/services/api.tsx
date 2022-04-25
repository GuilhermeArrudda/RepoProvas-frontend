import axios from "axios"

const { API_BASE_URL } = process.env

const BASE_URL = API_BASE_URL || 'http://localhost:4000'

interface userData {
	email: string
	password: string
}

export function signUp(body: userData) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export function login(body: userData) {
	console.log(body)
	return axios.post(`${BASE_URL}/login`, body)
}

