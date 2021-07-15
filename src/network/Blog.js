import {request} from "./index";

export function GetAllBlogs() {
	return request({
		url: "/getBlogs"
	})
}