import {GetAllBlogs} from "../network/Blog";

export default {
	updateAllBlogs(context) {
		GetAllBlogs().then(function (res) {
			context.commit({
				type: "allBlogInfos",
				Blogs: res.data.reverse()
			})
		})
	}
}
