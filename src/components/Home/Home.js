import { HashLink as Link } from 'react-router-hash-link';
import PostList from '../PostList/PostList';
import styles from './Home.module.scss';

const Home = () => {
  const createSection = (sectionName, postType) => (
    <section>
      <h2>
        {sectionName}
        {' Items'}
      </h2>

      <PostList postType={postType} limited />

      <div className={styles.more}>
        <Link to="/items#header">See more</Link>
      </div>
    </section>
  );

  return (
    <div>
      <header className={styles.header}>
        <h1>
          Welcome to a world where
          <br />
          everything is free.
        </h1>
      </header>

      <main className={styles.main}>
        {createSection('Offered', 'offer')}
        {createSection('Wanted', 'wanted')}
      </main>
    </div>
  );
};

export default Home;
