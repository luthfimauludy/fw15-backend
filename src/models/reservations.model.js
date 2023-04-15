const db = require("../helpers/db.helper");

const table = "reservations";

exports.findAll = async (page, limit, eventId, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  // search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "eventId"=$3
  ORDER BY ${sort} ${sortBy}
  LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset, eventId];
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
  INSERT INTO "${table}" ("eventId", "userId", "statusId", "paymentMethodId") 
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `;
  const values = [
    data.eventId,
    data.userId,
    data.statusId,
    data.paymentMethodId,
  ];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "eventId"=COALESCE(NULLIF($2::INTEGER, NULL), "eventId"),
  "userId"=COALESCE(NULLIF($3::INTEGER, NULL), "userId"),
  "statusId"=COALESCE(NULLIF($4::INTEGER, NULL), "statusId"),
  "paymentMethodId"=COALESCE(NULLIF($5::INTEGER, NULL), "paymentMethodId")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [
    id,
    data.eventId,
    data.userId,
    data.statusId,
    data.paymentMethodId,
  ];
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
