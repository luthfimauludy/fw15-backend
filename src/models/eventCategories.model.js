const db = require("../helpers/db.helper");

const table = "eventCategories";

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

exports.findOneByEventId = async (eventId) => {
  const query = `
  SELECT 
  "events"."id",
  "events"."title",
  "cities"."name" as "location",
  "categories"."name" as "category",
  "events"."date",
  "events"."descriptions",
  "events"."createdAt",
  "events"."updatedAt"
  FROM "${table}"
  JOIN "events" ON "events"."id" = "${table}"."eventId"
  JOIN "categories" ON "categories"."id" = "${table}"."categoryId"
  JOIN "cities" ON "cities"."id" = "events"."cityId"
  WHERE "${table}"."eventId"=$1
  `;
  const values = [eventId];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("eventId", "categoryId") VALUES ($1, $2)
  RETURNING *;
  `;
  const values = [data.eventId, data.categoryId];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "eventId"=COALESCE(NULLIF($2::INTEGER, NULL), "eventId"),
  "categoryId"=COALESCE(NULLIF($3::INTEGER, NULL), "categoryId")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [id, data.eventId, data.categoryId];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.updateByEventId = async (id, data) => {
  const query = `
  UPDATE "${table}" SET 
  "categoryId"=COALESCE(NULLIF($2::INTEGER, NULL), "categoryId")
  WHERE "eventId"=$1
  RETURNING *;
  `;
  const values = [id, data.categoryId];
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
