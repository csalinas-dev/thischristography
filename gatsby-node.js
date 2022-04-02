const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve("src"), "node_modules"],
    },
  });
};
