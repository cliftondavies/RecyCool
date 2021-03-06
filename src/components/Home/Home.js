import PostList from '../PostList/PostList';

const Home = () => {
  const createSection = (sectionName, postType) => (
    <section>
      <h2>
        {sectionName}
        {' Items'}
      </h2>

      <PostList postType={postType} limited />
    </section>
  );

  return (
    <div>
      <header>
        <h1>
          Welcome to a a world where
          <br />
          everything is free.
        </h1>
      </header>

      <main>
        {createSection('Offered', 'offer')}
        {createSection('Wanted', 'wanted')}
      </main>
    </div>
  );
};

export default Home;
