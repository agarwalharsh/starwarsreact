import React, { PropTypes } from 'react';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div className="search">
      <div className="search-title">Search by Planets</div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter a search term"
          onChange={e => onChange(e.target.value)}
          value={value}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
