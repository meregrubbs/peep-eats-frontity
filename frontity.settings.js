const settings = {
  name: "peepeats-frontity-www",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "peepeats-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://peepeats.website/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
