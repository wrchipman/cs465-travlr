/* GET Rooms View */
const rooms = (req, res) => {
  pageTitle = process.env.npm_package_description + " - Rooms"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
  res.render("rooms", { title: pageTitle });
};

module.exports = {
  rooms,
};
