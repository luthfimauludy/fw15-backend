const db = require("../helpers/db.helper");

const table = "events";

exports.findAll = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  search = qs.search || "";
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "title" LIKE $3
  ORDER BY ${sort} ${sortBy}
  LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset, `%${search}%`];
  const { rows } = await db.query(query, values);
  return rows;
};

exports.findEvents = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  search = qs.search || "";
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";
  city = qs.city || "name";

  const offset = (page - 1) * limit;
  const query = `
  SELECT

  FROM "${table}"
  WHERE "title" LIKE $3
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
  "users"."id" as "userId",
  "${table}"."title",
  "${table}"."date",
  "${table}"."cityId",
  "cities"."name" as "location",
  "${table}"."descriptions",
  "${table}"."createdAt",
  "${table}"."updatedAt",
  "${table}"."createdBy"
  FROM "${table}"
  JOIN "users" ON "users"."id" = "${table}"."userId"
  JOIN "cities" ON "cities"."id" = "${table}"."cityId"
  WHERE "${table}"."userId"=$1
  `;
  const values = [userId];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("picture", "title", "date", "cityId", "descriptions", "createdBy") 
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
  `;
  const values = [
    data.picture,
    data.title,
    data.date,
    data.cityId,
    data.descriptions,
    data.createdBy,
  ];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "picture"=COALESCE(NULLIF($2, ''), "picture"),
  "title"=COALESCE(NULLIF($3, ''), "title"),
  "date"=COALESCE(NULLIF($4::DATE, NULL), "date"),
  "cityId"=COALESCE(NULLIF($5::INTEGER, NULL), "cityId"),
  "descriptions"=COALESCE(NULLIF($6, ''), "descriptions"),
  "createdBy"=COALESCE(NULLIF($7::INTEGER, NULL), "createdBy")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [
    id,
    data.picture,
    data.title,
    data.date,
    data.cityId,
    data.descriptions,
    data.createdBy,
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
