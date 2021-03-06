import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PostList from '../PostList/PostList';
import Item from '../Item/Item';
import { changeFilter } from '../../redux/actions';

const Items = ({ posts, postFilter, changeFilter }) => {
  const { path } = useRouteMatch();

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <Switch>
      <Route exact path={path}>
        <div>
          <header />

          <main>
            <section>
              <CategoryFilter filterEvent={handleFilterChange} filterState={postFilter} />

              <PostList postType={postFilter} />
            </section>
          </main>
        </div>
      </Route>
      <Route
        path={`${path}/:itemID`}
        render={({ match }) => (
          <Item item={posts.find(post => post.post_id === Number(match.params.itemID))} />
        )}
      />
      <Route render={() => <h1>404: Page Not Found!</h1>} />
    </Switch>

  );
};

const mapStateToProps = state => ({ posts: state.posts.posts, postFilter: state.postFilter });

Items.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  postFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { changeFilter })(Items);
