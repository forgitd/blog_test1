export default {
	filterBlogs(state) {
		return function (str) {
			return state.Blogs.filter((blog) => {
				return (blog.title + "").match(str);
			})
		}
	}
}