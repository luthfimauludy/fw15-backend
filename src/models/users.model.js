const db = require("../helpers/db.helper");

exports.findAll = function () {
  return db.query('SELECT * FROM "users"');
};
