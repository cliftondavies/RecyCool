import { Link } from 'react-router-dom';
import faker from 'faker';
import PropTypes from 'prop-types';
import image from '../../assets/no-image.png';
import styles from './Post.module.scss';

const path = '/items';
const editedTitle = title => title.replace(/\(.*/gm, '');

const OfferPost = ({ id, thumbnail, title }) => {
  const days = Math.floor((Math.random() * 30));

  return (
    <article className={styles.post}>
      <Link to={`${path}/${id}`} />

      <img src={thumbnail || image} alt="thumbnail" />

      <div>
        <h3>{editedTitle(title)}</h3>

        <span>
          {`📍 ${Math.floor((Math.random() * 10))} km`}
        </span>
        <span>
          {`🌟 ${Math.floor((Math.random() * 5))}`}
        </span>
        <span>
          {`👀 ${Math.floor((Math.random() * 2000))}`}
        </span>
        <span>
          {(days > 1) ? `⌛ ${days} days ago` : `⌛ ${days} day ago`}
        </span>
      </div>
    </article>
  );
};

const WantedPost = ({ id, title }) => {
  const days = Math.floor((Math.random() * 30));

  return (
    <article className={styles.post}>
      <Link to={`${path}/${id}`} />

      <h3>
        {`${faker.name.findName()} `}
      </h3>

      <p>{editedTitle(title)}</p>

      <span>
        {(days > 1) ? `⌛ ${days} days ago` : `⌛ ${days} day ago`}
      </span>

    </article>
  );
};

const Post = ({
  post, postType,
}) => {
  const { post_id: id, title } = post;
  const photo = (post.photos) ? post.photos[0].thumbnail : null;

  if (postType === 'offer') { return <OfferPost id={id} thumbnail={photo} title={title} />; }

  return <WantedPost id={id} title={title} />;
};

OfferPost.defaultProps = {
  thumbnail: null,
};

OfferPost.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
};

WantedPost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  postType: PropTypes.string.isRequired,
};

export default Post;
