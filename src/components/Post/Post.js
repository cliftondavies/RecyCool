import PropTypes from 'prop-types';
import OfferPost from '../OfferPost/OfferPost';
import WantedPost from '../WantedPost/WantedPost';

const Post = ({
  post, postType,
}) => {
  const { post_id: id, title, content } = post;
  const photo = (post.photos) ? post.photos[0].url : null;

  if (postType === 'offer') { return <OfferPost id={id} thumbnail={photo} title={title} />; }

  return <WantedPost id={id} content={content} />;
};

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  postType: PropTypes.string.isRequired,
};

export default Post;
