import axios from "axios";

export function request(config) {
	const instance = axios.create({
		baseURL: "http://1.116.141.79:8082",
		timeout: 5000
	})
	
	return instance(config)
}

export function request1(config) {
	const instance = axios.create({
		baseURL: "http://1.116.141.79:8080",
		timeout: 5000
	})
	
	return instance(config)
}