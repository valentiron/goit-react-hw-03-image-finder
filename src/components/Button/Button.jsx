import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button onClick={loadMore} type="button" className="Button">
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};