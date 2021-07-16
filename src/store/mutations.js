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
	
}