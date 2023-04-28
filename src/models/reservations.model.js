const db = require("../helpers/db.helper");

const table = "reservations";

exports.findAll = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  search = qs.search || "";
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "id"::TEXT LIKE $3
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

exports.findOneByUserId = async (userId) => {
  const query = `
  SELECT 
  "events"."id",
  "users"."id",
  "reservationStatus"."id,
  "paymentMethods"."id",
  "${table}"."createdAt",
  "${table}"."updatedAt"
  FROM "${table}" 
  JOIN "events" ON "events"."id" = "${table}"."eventId"
  JOIN "users" ON "users"."id" = "${table}"."userId"
  JOIN "reservationStatus" ON "reservationStatus"."id" = "${table}"."statusId"
  JOIN "paymentMethods" ON "paymentMethods"."id" = "${table}"."paymentMethodId"
  WHERE "${table}"."userId"=$1
  `;
  const values = [userId];
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
