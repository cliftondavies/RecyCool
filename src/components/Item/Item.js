import PropTypes from 'prop-types';
import faker from 'faker';
import image from '../../assets/no-image.png';
import styles from './Item.module.scss';

const Item = ({ item }) => {
  const { title, content, type } = item;
  const photo = (item.photos) ? item.photos[0].url : null;
  const editedContent = content.replace(/\s+http.+/g, '.');
  const editedTitle = title.replace(/\(.*/gm, '');
  const itemClass = (type === 'offer') ? styles.offeritem : styles.wanteditem;

  return (
    <div className={styles.item}>
      <header />

      <main>
        <section>
          <h2>{editedTitle}</h2>

          <div className={itemClass}>
            {type === 'offer' && <img src={photo || image} alt="item" />}

            <div>
              <h3>Description</h3>

              <p>{editedContent}</p>

              <span>
                {`Posted by ${faker.name.findName()}`}
              </span>
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
