import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from '../../assets/no-image.png';
import styles from './OfferPost.module.scss';

const OfferPost = ({ id, thumbnail, title }) => {
  const days = Math.floor((Math.random() * 30));
  const editedTitle = title.replace(/\(.*/gm, '');
  const path = '/items';

  const location = {
    pathname: `${path}/${id}`,
    state: { offer: true },
  };

  const dayText = amountOfDays => {
    let dayText;

    if (amountOfDays === 0) { dayText = 'today'; }
    if (amountOfDays === 1) { dayText = `⌛ ${amountOfDays} day ago`; }
    if (amountOfDays > 1) { dayText = `⌛ ${amountOfDays} days ago`; }

    return dayText;
  };

  return (
    <article className={styles.offer}>
      <Link to={location} />

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

OfferPost.defaultProps = {
  thumbnail: null,
};

OfferPost.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default OfferPost;
