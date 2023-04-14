const db = require("../helpers/db.helper");

const table = "profile";

exports.findAll = async (page, limit, search, sort, sortBy) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  search = search || "";
  sort = sort || "id";
  sortBy = sortBy || "ASC";

  const offset = (page - 1) * limit;
  const query = `
  SELECT * FROM "${table}"
  WHERE "fullName" LIKE $3
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

exports.findOneByName = async (fullName) => {
  const query = `
  SELECT * FROM "${table}" WHERE fullName=$1
  `;
  const values = [fullName];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.insert = async (data) => {
  const query = `
  INSERT INTO "${table}" ("picture", "fullName", "phoneNumber", "gender", "profession", "nasionality", "birthDate") 
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;
  `;
  const values = [
    data.picture,
    data.fullName,
    data.phoneNumber,
    data.gender,
    data.profession,
    data.nasionality,
    data.birthDate,
  ];
  const { rows } = await db.query(query, values);
  return rows[0];
};

exports.update = async (id, data) => {
  const query = `
  UPDATE "${table}" 
  SET 
  "picture"=COALESCE(NULLIF($2, ''), "picture"),
  "fullName"=COALESCE(NULLIF($3, ''), "fullName"),
  "phoneNumber"=COALESCE(NULLIF($4, ''), "phoneNumber"),
  "gender"=COALESCE(NULLIF($5, FALSE), "gender"),
  "profession"=COALESCE(NULLIF($6, ''), "profession"),
  "nasionality"=COALESCE(NULLIF($7, ''), "nasionality"),
  "birthDate"=COALESCE(NULLIF($8::DATE, NULL), "birthDate")
  WHERE "id"=$1
  RETURNING *;
  `;
  const values = [
    id,
    data.picture,
    data.fullName,
    data.phoneNumber,
    data.gender,
    data.profession,
    data.nasionality,
    data.birthDate,
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