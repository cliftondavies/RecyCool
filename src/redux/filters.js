export default (state, filter) => {
  const { posts } = state.posts;
  return (posts.length > 0) ? posts.filter(post => post.type === filter) : posts;
};
