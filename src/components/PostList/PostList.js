import { useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import filterPostsByCategory from '../../redux/filters';
import { getLondonPosts, getUserCoords } from '../../api/api';
import styles from './PostList.module.scss';

const PostList = ({
  dispatch, postType, limited,
}) => {
  const { defaultLoading, geoLoading, error } = useSelector(state => state.posts);
  const postlistClass = (postType === 'offer') ? styles.offerlist : styles.wantedlist;
  let posts = useSelector(state => filterPostsByCategory(state, postType));
  posts = (limited) ? posts.splice(0, 6) : posts;

  useEffect(() => {
    if (defaultLoading === 'idle') {
      dispatch(getLondonPosts);
    } else if (geoLoading === 'idle') {
      dispatch(getUserCoords);
    }
  }, [defaultLoading, geoLoading, dispatch]);

  return (
    <div className={postlistClass}>
      {(posts.length > 0) ? posts.map(post => (
        <Post post={post} postType={postType} key={post.post_id} />
      )) : <span>{error}</span>}
    </div>
  );
};

PostList.defaultProps = {
  limited: false,
};

PostList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  postType: PropTypes.string.isRequired,
  limited: PropTypes.bool,
};

export default connect(null, null)(PostList);
