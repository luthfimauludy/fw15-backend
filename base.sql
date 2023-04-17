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
INSERT INTO "users" ("username", "email", "password") VALUES 
('Rick', 'rick@mail.com', '!@#123Abc'),
('Antonio', 'antonio@mail.com', '!@#123Abc'),
('Jack', 'jack@mail.com', '!@#123Abc'),
('Sarah', 'sarah@mail.com', '!@#123Abc'),
('Alan', 'alan@mail.com', '!@#123Abc'),
('Sam Bahamas', 'sam@mail.com', '!@#123Abc'),
('Goldy', 'goldy@mail.com', '!@#123Abc'),
('Roberto', 'roberto@mail.com', '!@#123Abc'),
('Zahra', 'zahra@mail.com', '!@#123Abc'),
('Petra', 'petra@mail.com', '!@#123Abc');

UPDATE "users" SET "email"='admin@gmail.com' WHERE "id"=1;

DELETE FROM "users" WHERE "id"=2;

SELECT * FROM "users" LIMIT 5 OFFSET 0;

SELECT * FROM "users" ORDER BY "email" ASC LIMIT 5 OFFSET 0;

DROP TABLE "users";

ALTER TABLE "users" ADD COLUMN "picture" VARCHAR(255);

ALTER TABLE "profile" ADD COLUMN "userId" INTEGER;

CREATE TABLE "users" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "username" VARCHAR(255),
  "email" VARCHAR(255) UNIQUE,
  "password" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "profile" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "picture" VARCHAR(255),
  "fullName" VARCHAR(255),
  "phoneNumber" VARCHAR(255),
  "gender" BOOLEAN,
  "profession" VARCHAR(255),
  "nasionality" VARCHAR(255),
  "birthDate" DATE,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "categories" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "cities" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "picture" VARCHAR(255),
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "events" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "picture" VARCHAR(255),
  "title" VARCHAR(255),
  "date" DATE,
  "cityId" INTEGER,
  "descriptions" TEXT,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "eventCategories" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "eventId" INTEGER,
  "categoryId" INTEGER,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "partners" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "picture" VARCHAR(255),
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "reservationSections" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255),
  "price" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "reservationStatus" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "paymentMethods" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255),
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "reservations" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "eventId" INTEGER,
  "userId" INTEGER,
  "statusId" INTEGER,
  "paymentMethodId" INTEGER,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "reservationTickets" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "reservationId" INTEGER,
  "sectionId" INTEGER,
  "quantity" INTEGER,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);

CREATE TABLE "wishlists" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "eventId" INTEGER,
  "userId" INTEGER,
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NULL
);
