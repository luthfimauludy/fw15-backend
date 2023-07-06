const db = require("../helpers/db.helper");

const table = "deviceToken";

exports.findAll = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  ORDER BY ${sort} ${sortBy}
  LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset];
  const { rows } = await db.query(query, values);
  return rows;
};

exports.insertToken = async (id, data) => {
  const query = `
  INSERT INTO "${table}" ("token", "userId") 
  VALUES ($1, $2)
  RETURNING *;
  `;
  const values = [data.token, id];
  const { rows } = await db.query(query, values);
  return rows[0];
};
