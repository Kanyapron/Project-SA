BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "members" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"username"	text,
	"password"	text,
	"email"	text,
	"first_name"	text,
	"last_name"	text,
	"phone_number"	text,
	"address"	text,
	"profile_pic"	longtext,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "members" VALUES (1,'2024-09-08 20:58:46.7413785+07:00','2024-09-08 20:58:46.7413785+07:00',NULL,'Varoniga','V1234','varoniga.c@gmail.com','Varoniga','Leclerc','0977777777','33/4 บางพลี สมุทรปราการ 10540','');
INSERT INTO "members" VALUES (2,'2024-09-13 16:29:29.7693075+07:00','2024-09-13 16:29:29.7693075+07:00',NULL,'','$2a$14$a7glJx4ZzZVhAc./oYfEReEhxvxEl38xGdhPkuk.4HkKldphILlfu','Kanny@gmail.com','Kanny','Kd','0958642977','','');
CREATE INDEX IF NOT EXISTS "idx_members_deleted_at" ON "members" (
	"deleted_at"
);
COMMIT;
