const db = require("../helpers/db.helper");

exports.findAll = async (page, limit, search, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "users"
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
  SELECT * FROM "users"
  WHERE id=$1
  `;
  const values = [id];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.findOneByEmail = async (email) => {
  const query = `
  SELECT * FROM "users"
  WHERE email=$1
  `;
  const values = [email];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "users" ("fullName", "email", "password", "picture") 
  VALUES ($1, $2, $3, $4) 
  RETURNING *;
`;
  const values = [data.fullName, data.email, data.password, data.picture];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "users" 
  SET "fullName"=$2, "email"=$3 , "password"=$4, "picture"=$5
  WHERE "id"=$1
  RETURNING *;
`;
  const values = [id, data.fullName, data.email, data.password, data.picture];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.destroy = async (id) => {
  const query = `
  DELETE FROM "users" 
  WHERE "id"=$1
  RETURNING *;
`;
  const values = [id];
  const { rows } = await db.query(query, values);
  return rows[0];
};
