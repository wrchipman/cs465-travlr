/* GET About View */
const about = (req, res) => {
  pageTitle = process.env.npm_package_description + " - About"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
  res.render("about", { title: pageTitle });
};

module.exports = {
  about,
};
