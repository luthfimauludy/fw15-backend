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

exports.findAllByUserLogin = async (qs) => {
  page = parseInt(qs.page) || 1;
  limit = parseInt(qs.limit) || 5;
  search = qs.search || "";
  sort = qs.sort || "id";
  sortBy = qs.sortBy || "ASC";
  category = qs.category || "";
  city = qs.city || "";

  const offset = (page - 1) * limit;

  const countQuery = `
  SELECT COUNT(*)::INTEGER
  FROM "${table}"
  WHERE "title" ILIKE $1`;

  const countvalues = [`%${search}%`];
  const { rows: countRows } = await db.query(countQuery, countvalues);

  const query = `
  SELECT
  "${table}"."id",
  "${table}"."picture",
  "${table}"."title",
  "${table}"."date",
  "categories"."name" as "category",
  "cities"."name" as "location"
  FROM "${table}"
  JOIN "eventCategories" ON "${table}"."id" = "eventCategories"."eventId"
  JOIN "categories" ON "categories"."id" = "eventCategories"."categoryId"
  JOIN "cities" ON "cities"."id" = "${table}"."cityId"
  WHERE "${table}"."title" ILIKE $3 
  AND "categories"."name" ILIKE $4
  AND "cities"."name" ILIKE $5
  ORDER BY ${sort} ${sortBy}
  LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset, `%${search}%`, `%${category}%`, `%${city}%`];
  const { rows } = await db.query(query, values);
  return {
    rows,
    pageInfo: {
      totalData: countRows[0].count,
      page: page,
      limit: limit,
      totalPage: Math.ceil(countRows[0].count / limit),
    },
  };
};

exports.findOne = async (id) => {
  const query = `
  SELECT * FROM "${table}"
  WHERE "id"=$1
  `;
  const values = [id];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.findEventsByUserLogin = async (createdBy) => {
  const query = `
  SELECT
  "${table}"."id",
  "${table}"."title",
  "${table}"."date",
  "${table}"."createdAt",
  "cities"."name" as "location"
  FROM "${table}"
  JOIN "cities" ON "cities"."id" = "${table}"."cityId"
  WHERE "${table}"."createdBy"=$1
  `;
  const values = [createdBy];
  const { rows } = await db.query(query, values);
  return rows;
};

exports.findOneById = async (id) => {
  const query = `
  SELECT 
  "${table}"."id",
  "${table}"."picture",
  "${table}"."title",
  "${table}"."date",
  "categories"."name" as "category",
  "cities"."name" as "location",
  "${table}"."descriptions"
  FROM "${table}"
  JOIN "eventCategories" ON "${table}"."id" = "eventCategories"."eventId"
  JOIN "categories" ON "categories"."id" = "eventCategories"."categoryId"
  JOIN "cities" ON "cities"."id" = "${table}"."cityId"
  WHERE "${table}"."id"=$1
  `;
  const values = [id];
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
