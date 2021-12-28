import {request1,request} from "./index";

export function getDetailInfo(config) {
	return  request1({
		url: config
	})
}

export function getReviews(id) {
	return request({
		url: "/getReview",
		methods: 'get',
		params: {
			id: id
		}
	})
}

export function getAllReviews() {
	return request({
		url: "/getRes",
		methods: 'get'
	})
}

export function delReview(id) {
	return request({
		url: "/deleteReview",
		methods: 'get',
		params: {
			id: id,
		}
	})
}

export function Commit(id, comment, name) {
	return request({
		url: "/addReview",
		methods: 'get',
		params: {
			id_blog: id,
			comment: comment,
			id_user_name: name
		}
	})
}