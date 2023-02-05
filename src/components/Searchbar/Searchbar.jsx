import { Component } from 'react';
import PropTypes from 'prop-types';

 class Searchbar extends Component {
  state = {
    SearchQuery: '',
  };

  handleChange = event => {
    this.setState({ SearchQuery: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.SearchQuery);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="SearchForm-button"
            disabled={this.props.formSubmitting}
          >
            <span className="searchform-label"></span>
          </button>

          <input
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
  formSubmitting: PropTypes.bool.isRequired,
}