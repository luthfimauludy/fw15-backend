const db = require("../helpers/db.helper");

const table = "forgotRequest";

exports.findAll = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  search = qs.search || "";
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";

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

exports.findOneByCode = async (code) => {
  const query = `
  SELECT * FROM "${table}" WHERE code=$1
  `;
  const values = [code];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("email", "code") 
  VALUES ($1, $2) 
  RETURNING *;
`;
  const values = [data.email, data.code];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "email"=COALESCE(NULLIF($2, ''), "email"),
  "code"=COALESCE(NULLIF($3, ''), "code")
  WHERE "id"=$1
  RETURNING *;
`;
  const values = [id, data.email, data.code];
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
