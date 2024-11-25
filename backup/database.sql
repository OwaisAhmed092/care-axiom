/*
 Navicat Premium Dump SQL

 Source Server         : Postgresql Local
 Source Server Type    : PostgreSQL
 Source Server Version : 160001 (160001)
 Source Host           : localhost:5432
 Source Catalog        : care-axiom
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160001 (160001)
 File Encoding         : 65001

 Date: 26/11/2024 02:39:40
*/


-- ----------------------------
-- Sequence structure for user_userId_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_userId_seq";
CREATE SEQUENCE "public"."user_userId_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "userId" int4 NOT NULL DEFAULT nextval('"user_userId_seq"'::regclass),
  "name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "email" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "age" int4 NOT NULL,
  "updatedAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO "public"."user" VALUES (1, 'Diana Williams', 'diana.williams@example.com', 11, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (2, 'Frank Garcia', 'frank.garcia@gmail.com', 30, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (3, 'Chris Garcia', 'chris.garcia@outlook.com', 17, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (4, 'Eve Davis', 'eve.davis@example.com', 24, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (5, 'Alice Garcia', 'alice.garcia@yahoo.com', 14, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (6, 'Eve Brown', 'eve.brown@gmail.com', 17, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (7, 'Bob Smith', 'bob.smith@yahoo.com', 28, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (8, 'Bob Miller', 'bob.miller@yahoo.com', 12, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (9, 'John Lopez', 'john.lopez@gmail.com', 13, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (10, 'Grace Jones', 'grace.jones@example.com', 17, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (11, 'Diana Smith', 'diana.smith@gmail.com', 18, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (12, 'Diana Johnson', 'diana.johnson@example.com', 15, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (13, 'Eve Jones', 'eve.jones@outlook.com', 16, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (14, 'Chris Johnson', 'chris.johnson@outlook.com', 29, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (15, 'Frank Johnson', 'frank.johnson@yahoo.com', 19, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (17, 'John Jones', 'john.jones@outlook.com', 25, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (18, 'Diana Lopez', 'diana.lopez@outlook.com', 18, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (19, 'Chris Lopez', 'chris.lopez@yahoo.com', 20, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (20, 'Eve Miller', 'eve.miller@gmail.com', 11, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (21, 'Eve Lopez', 'eve.lopez@yahoo.com', 14, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (22, 'Jane Brown', 'jane.brown@outlook.com', 27, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (24, 'Jane Williams', 'jane.williams@gmail.com', 21, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (25, 'Chris Miller', 'chris.miller@yahoo.com', 10, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (26, 'Jane Brown', 'jane.brown@yahoo.com', 21, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (27, 'Diana Davis', 'diana.davis@example.com', 17, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (29, 'Diana Clark', 'diana.clark@example.com', 30, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (30, 'Frank Davis', 'frank.davis@outlook.com', 20, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (31, 'Alice Williams', 'alice.williams@yahoo.com', 11, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (32, 'John Brown', 'john.brown@gmail.com', 30, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (33, 'Chris Smith', 'chris.smith@yahoo.com', 21, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (34, 'Eve Johnson', 'eve.johnson@gmail.com', 22, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (35, 'Alice Lopez', 'alice.lopez@outlook.com', 18, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (36, 'Bob Miller', 'bob.miller@outlook.com', 25, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (37, 'Jane Smith', 'jane.smith@gmail.com', 14, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (38, 'Frank Miller', 'frank.miller@outlook.com', 20, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (39, 'Alice Lopez', 'alice.lopez@gmail.com', 19, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (40, 'Frank Miller', 'frank.miller@gmail.com', 21, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (41, 'Grace Jones', 'grace.jones@outlook.com', 15, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (42, 'Grace Brown', 'grace.brown@yahoo.com', 29, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (43, 'Bob Lopez', 'bob.lopez@yahoo.com', 24, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (44, 'Frank Clark', 'frank.clark@yahoo.com', 30, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (45, 'Grace Brown', 'grace.brown@gmail.com', 28, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (46, 'Diana Jones', 'diana.jones@gmail.com', 16, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (47, 'Grace Davis', 'grace.davis@yahoo.com', 18, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (48, 'Diana Williams', 'diana.williams@outlook.com', 20, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (49, 'Grace Garcia', 'grace.garcia@yahoo.com', 28, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');
INSERT INTO "public"."user" VALUES (50, 'Eve Garcia', 'eve.garcia@outlook.com', 13, '2024-11-26 01:16:35.590843', '2024-11-26 01:16:35.590843');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."user_userId_seq"
OWNED BY "public"."user"."userId";
SELECT setval('"public"."user_userId_seq"', 50, true);

-- ----------------------------
-- Indexes structure for table user
-- ----------------------------
CREATE INDEX "idx_user_age" ON "public"."user" USING btree (
  "age" "pg_catalog"."int4_ops" ASC NULLS LAST
);
ALTER TABLE "public"."user" CLUSTER ON "idx_user_age";

-- ----------------------------
-- Uniques structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table user
-- ----------------------------
ALTER TABLE "public"."user" ADD CONSTRAINT "user_pkey" PRIMARY KEY ("userId");

-- ----------------------------
-- Cluster option for table user
-- ----------------------------
ALTER TABLE "public"."user" CLUSTER ON "idx_user_age";
