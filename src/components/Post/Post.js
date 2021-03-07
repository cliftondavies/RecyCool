import { Link } from 'react-router-dom';
import faker from 'faker';
import PropTypes from 'prop-types';
import image from '../../assets/no-image.png';
import styles from './Post.module.scss';

const path = '/items';
const dayText = amountOfDays => {
  let dayText;

  if (amountOfDays === 0) { dayText = 'today'; }
  if (amountOfDays === 1) { dayText = `⌛ ${amountOfDays} day ago`; }
  if (amountOfDays > 1) { dayText = `⌛ ${amountOfDays} days ago`; }

  return dayText;
};

const OfferPost = ({ id, thumbnail, title }) => {
  const days = Math.floor((Math.random() * 30));
  const editedTitle = title.replace(/\(.*/gm, '');

  return (
    <article className={`${styles.post} ${styles.offer}`}>
      <Link to={`${path}/${id}`} />

      <img src={thumbnail || image} width="250" height="250" alt="thumbnail" />

      <div>
        <h3>{editedTitle}</h3>

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
          {dayText(days)}
        </span>
      </div>
    </article>
  );
};

const WantedPost = ({ id, content }) => {
  const days = Math.floor((Math.random() * 30));
  const editedContent = content.replace(/\s+http.+/g, '.');

  return (
    <article className={`${styles.post} ${styles.wanted}`}>
      <Link to={`${path}/${id}`} />

      <h3>
        {`${faker.name.findName()} `}
      </h3>

      <p>{editedContent}</p>

      <span>
        {dayText(days)}
      </span>
    </article>
  );
};

const Post = ({
  post, postType,
}) => {
  const { post_id: id, title, content } = post;
  const photo = (post.photos) ? post.photos[0].url : null;

  if (postType === 'offer') { return <OfferPost id={id} thumbnail={photo} title={title} />; }

  return <WantedPost id={id} content={content} />;
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
  content: PropTypes.string.isRequired,
};

Post.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  postType: PropTypes.string.isRequired,
};

export default Post;
