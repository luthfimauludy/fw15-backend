const db = require("../helpers/db.helper");

const table = "reservationSections";

exports.findAll = async (page, limit, search, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "name" LIKE $3
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

exports.findOneByName = async (name) => {
  const query = `
  SELECT * FROM "${table}" WHERE name=$1
  `;
  const values = [name];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("name", "price") 
  VALUES ($1, $2)
  RETURNING *;
  `;
  const values = [data.name, data.price];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "name"=COALESCE(NULLIF($2, ''), "name"),
  "price"=COALESCE(NULLIF($3, ''), "price")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [id, data.name, data.price];
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
