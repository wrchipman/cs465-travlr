/* GET Contact View */
const contact = (req, res) => {
  pageTitle = process.env.npm_package_description + " - Contact"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
  res.render("contact", { title: pageTitle });
};

module.exports = {
  contact,
};
