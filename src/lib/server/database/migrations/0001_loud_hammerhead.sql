CREATE TABLE IF NOT EXISTS "project" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(140) NOT NULL,
	"deploy_url" text,
	"vcs_url" text,
	"description_pt_br" text NOT NULL,
	"description_en_us" text NOT NULL,
	"details_pt_br" text NOT NULL,
	"details_en_us" text NOT NULL,
	"images" json DEFAULT '[]'::json NOT NULL,
	"stack" json DEFAULT '[]'::json NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
