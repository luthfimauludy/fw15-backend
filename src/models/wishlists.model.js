const db = require("../helpers/db.helper");

const table = "wishlists";

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

exports.findAllByUserId = async (userId) => {
  const query = `
  SELECT 
  "events"."id" as "eventId",
  "users"."id" as "userId",
  "events"."title",
  "cities"."name" as "location",
  "events"."date",
  "${table}"."createdAt",
  "${table}"."updatedAt"
  FROM "${table}" 
  JOIN "events" ON "events"."id" = "${table}"."eventId"
  JOIN "users" ON "users"."id" = "${table}"."userId"
  JOIN "cities" ON "cities"."id" = "events"."cityId"
  WHERE "${table}"."userId"=$1
  `;
  const values = [userId];
  const { rows } = await db.query(query, values);
  return rows;
};

exports.findOneByUserIdAndEventId = async (userId, eventId) => {
  const queries = `
  SELECT * FROM "${table}"
  WHERE "userId" = $1 AND "eventId" = $2
`;
  const values = [userId, eventId];
  const { rows } = await db.query(queries, values);
  return rows[0];
};

exports.deleteByUserIdAndEventId = async (userId, eventId) => {
  const queries = `
  DELETE FROM "${table}"
  WHERE "userId" = $1 AND "eventId" = $2
  RETURNING *
  `;
  const values = [userId, eventId];
  const { rows } = await db.query(queries, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("eventId", "userId") 
  VALUES ($1, $2)
  RETURNING *;
  `;
  const values = [data.eventId, data.userId];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "eventId"=COALESCE(NULLIF($2::INTEGER, NULL), "eventId"),
  "userId"=COALESCE(NULLIF($3::INTEGER, NULL), "userId")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [id, data.eventId, data.userId];
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
