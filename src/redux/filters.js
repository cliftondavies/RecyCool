export default (state, filter) => {
  const { posts } = state.posts;
  if (posts.length > 0) { return posts.filter(post => post.type === filter); }
  return posts;
};
