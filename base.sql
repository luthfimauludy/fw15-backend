CREATE TABLE "users" (
  "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "fullName" VARCHAR(80),
  "email" VARCHAR(255) UNIQUE,
  "password" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP NULL
);

INSERT INTO "users" ("email", "password") VALUES ('admin@mail.com', '1234');
INSERT INTO "users" ("email", "password") VALUES ('fazztrack@mail.com', '1234');
INSERT INTO "users" ("email", "password") VALUES ('ronald@mail.com', '1234');
INSERT INTO "users" ("fullName", "email", "password") VALUES 
('Rick', 'rick@mail.com', '1234'),
('Antonio', 'antonio@mail.com', '1234'),
('Jack', 'jack@mail.com', '1234'),
('Roy', 'roy@mail.com', '1234'),
('Alan', 'alan@mail.com', '1234');

UPDATE "users" SET "email"='admin@gmail.com' WHERE "id"=1;

DELETE FROM "users" WHERE "id"=2;

SELECT * FROM "users" LIMIT 5 OFFSET 0;

SELECT * FROM "users" ORDER BY "email" ASC LIMIT 5 OFFSET 0;

DROP TABLE "users";

ALTER TABLE "users" ADD COLUMN "picture" VARCHAR(255);
