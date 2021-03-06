import PropTypes from 'prop-types';

const CategoryFilter = ({ filterEvent, filterState }) => (
  <label htmlFor="filter">
    CATEGORIES
    <select name="filter" value={filterState} id="filter" onChange={e => filterEvent(e.target.value)} required>
      <option value="offer">Offer</option>
      <option value="wanted">Wanted</option>
    </select>
  </label>
);

CategoryFilter.propTypes = {
  filterEvent: PropTypes.func.isRequired,
  filterState: PropTypes.string.isRequired,
};

export default CategoryFilter;
