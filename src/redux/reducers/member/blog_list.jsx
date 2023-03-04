const BlogList = (state = [], action) => {
  switch (action.type) {
    case "StoreBlogList":
      return action.payload;
    default:
      return state;
  }
};
export default BlogList;
