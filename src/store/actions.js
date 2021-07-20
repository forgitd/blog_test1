import {GetAllBlogs} from "../network/Blog";
import {getReviews} from "../network/Detail"

export default {
	updateAllBlogs(context) {
		GetAllBlogs().then(function (res) {
			context.commit({
				type: "allBlogInfos",
				Blogs: res.data.reverse()
			})
		})
	},
	
	updateReviews(context,id) {
		getReviews(id).then( res => {
			context.commit({
				type: "allReviewInfos",
				reviews: res.data
			})
		})
	}
}
