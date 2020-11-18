import React from "react";
import { connect, styled, css, keyframes } from "frontity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ state, actions }) => {
  const handleSearch = e => {
    actions.theme.setSearchValue(e.target.value);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faSearch}
        onClick={actions.theme.toggleSearchInput}
        css={css`
          &:hover {
            cursor: pointer;
          }
        `}
      />
      <InputStyle
        type="text"
        value={state.searchValue}
        placeholder="search recipes"
        onChange={handleSearch}
        css={css`
          display: ${state.searchInputToggle ? "inline" : "none"};
        `}
      />
    </div>
  );
};

const InputStyle = styled.input`
  border: none;
  border-bottom: 2px solid black;
  margin-left: 1em;
  padding-bottom: 0.5em;
  &:focus,
  &:active {
    border: none;
    box-shadow: none;
    outline: none;
    border-bottom: 2px solid black;
  }
`;

export default connect(Searchbar);
