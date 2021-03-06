import PropTypes from 'prop-types';
import faker from 'faker';
import image from '../../assets/no-image.png';
import styles from './Item.module.scss';

const Item = ({ item }) => {
  const { title, content, type } = item;
  const photo = (item.photos) ? item.photos[0].thumbnail : null;
  const editedContent = content.replace(/\s+http.+/g, '.');
  const editedTitle = title.replace(/\(.*/gm, '');

  return (
    <div>
      <header />

      <main>
        <section className={styles.item}>
          <h2>{editedTitle}</h2>

          <div>
            {type === 'offer' && <img src={photo || image} alt="item" />}

            <div>
              <span>
                {`Posted by ${faker.name.findName()}`}
              </span>

              <h3>Description</h3>

              <p>{editedContent}</p>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
};

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Item;
