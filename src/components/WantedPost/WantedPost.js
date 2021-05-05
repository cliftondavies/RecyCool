import { Link } from 'react-router-dom';
import faker from 'faker';
import PropTypes from 'prop-types';
import styles from './WantedPost.module.scss';

const WantedPost = ({ id, content }) => {
  const days = Math.floor((Math.random() * 30));
  const editedContent = content.replace(/\s+http.+/g, '.');
  const path = '/items';

  const location = {
    pathname: `${path}/${id}`,
    state: { wanted: true },
  };

  const dayText = amountOfDays => {
    let dayText;

    if (amountOfDays === 0) { dayText = 'today'; }
    if (amountOfDays === 1) { dayText = `⌛ ${amountOfDays} day ago`; }
    if (amountOfDays > 1) { dayText = `⌛ ${amountOfDays} days ago`; }

    return dayText;
  };

  return (
    <article className={styles.wanted}>
      <Link to={location} />

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

WantedPost.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default WantedPost;
