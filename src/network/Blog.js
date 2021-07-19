import {request} from "./index";

export function GetAllBlogs() {
	return request({
		url: "/getBlogs"
	})
}

export function Login_Methods(username, password) {
	return request({
		url: "/login_test",
		methods: 'get',
		params: {
			username: username,
			password: password
		}
	})
}