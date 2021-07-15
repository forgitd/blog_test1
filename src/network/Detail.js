import {request1} from "./index";

export function getDetailInfo(config) {
	return  request1({
		url: config
	})
}