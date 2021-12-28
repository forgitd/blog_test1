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

export function Register(username, password) {
	return request({
		url: "/register",
		methods: 'get',
		params: {
			username: username,
			password: password
		}
		
	})
}

export function LoginCommon(username, password) {
	return request({
		url: "/login_common",
		methods: 'get',
		params: {
			username: username,
			password: password
		}
		
	})
}

export function DelBlog(id) {
	return request({
		url: "/delBlog",
		methods: 'get',
		params: {
			id: id,
		}
	})
}

export function AddBlog(title, comment, date, md_url) {
	return request({
		url: "/addBlog",
		methods: 'get',
		params: {
			title: title,
			comment: comment,
			date: date,
			md_url: md_url
		}
	})
}