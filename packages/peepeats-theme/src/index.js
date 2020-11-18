import Root from "./Root";

export default {
  name: "peepeats-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {},
    darkGreen: "#33622b",
    lightGreen: "#f2f9f1",
    searchInputToggle: false,
    searchValue: ""
  },
  actions: {
    theme: {
      toggleSearchInput: ({ state }) => {
        const currentState = state.searchInputToggle;
        state.searchInputToggle = !currentState;
        state.searchValue = "";
      },
      setSearchValue: ({ state }) => text => {
        state.searchValue = text;
      }
    }
  }
};
