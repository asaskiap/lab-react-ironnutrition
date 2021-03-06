import React from 'react';
import { ThemeProvider } from 'react-bootstrap';

class SearchForm extends React.Component {
  handleSearchInput = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        className="searchBar"
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        onChange={this.handleSearchInput}
        value={this.props.searchValue}
      ></input>
    );
  }
}

export default SearchForm;
