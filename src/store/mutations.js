export default {
	allBlogInfos(state, payload) {
		if (state.Blogs.length) {
			state.Blogs.splice(0, state.Blogs.length)
		}
		for (let i = 0; i < payload.Blogs.length; i++) {
			state.Blogs.push(payload.Blogs[i])
		}
	},
	
	setBlog_id(state, n) {
		state.blog_id = n;
	},
	
	updateFlag(state) {
		state.flag = !state.flag
	},
	
	updateCommentFlag(state) {
		state.common_flag = !state.common_flag
	},
	
	allReviewInfos(state, payload) {
		if (state.reviews.length) {
			state.reviews.splice(0, state.reviews.length)
		}
		for (let i = 0; i < payload.reviews.length; i++) {
			state.reviews.push(payload.reviews[i])
		}
	},
}