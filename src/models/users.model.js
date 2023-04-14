const db = require("../helpers/db.helper");

const table = "users";

exports.findAll = async (page, limit, search, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "email" LIKE $3
  ORDER BY ${sort} ${sortBy}
  LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset, `%${search}%`];
  const { rows } = await db.query(query, values);
  return rows;
};

exports.findOne = async (id) => {
  const query = `
  SELECT * FROM "${table}" WHERE id=$1
  `;
  const values = [id];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.findOneByEmail = async (email) => {
  const query = `
  SELECT * FROM "${table}" WHERE email=$1
  `;
  const values = [email];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("username", "email", "password") 
  VALUES ($1, $2, $3) 
  RETURNING *;
`;
  const values = [data.username, data.email, data.password];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "username"=COALESCE(NULLIF($2, ''), "username"),
  "email"=COALESCE(NULLIF($3, ''), "email"),
  "password"=COALESCE(NULLIF($4, ''), "username")
  WHERE "id"=$1
  RETURNING *;
`;
  const values = [id, data.username, data.email, data.password];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.destroy = async (id) => {
  const query = `
  DELETE FROM "${table}" WHERE "id"=$1
  RETURNING *;
`;
  const values = [id];
  const { rows } = await db.query(query, values);
  return rows[0];
};
