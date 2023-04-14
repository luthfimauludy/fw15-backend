const db = require("../helpers/db.helper");

const table = "reservationTickets";

exports.findAll = async (page, limit, search, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "reservationId" LIKE $3
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

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("reservationId", "sectionId", "quantity") 
  VALUES ($1, $2, $3)
  RETURNING *;
  `;
  const values = [data.reservationId, data.sectionId, data.quantity];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET
  "reservationId"=COALESCE(NULLIF($2::INTEGER, NULL), "reservationId"),
  "sectionId"=COALESCE(NULLIF($3::INTEGER, NULL), "sectionId"),
  "quantity"=COALESCE(NULLIF($4::INTEGER, NULL), "quantity")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [id, data.reservationId, data.sectionId, data.quantity];
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
