CREATE TABLE IF NOT EXISTS "bookmark" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"url" text NOT NULL,
	"description_pt_br" text NOT NULL,
	"description_en_us" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bookmark_tag" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "bookmark_tag_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bookmark_to_tag" (
	"bookmark_id" integer,
	"tag_id" integer,
	CONSTRAINT bookmark_to_tag_bookmark_id_tag_id PRIMARY KEY("bookmark_id","tag_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookmark_to_tag" ADD CONSTRAINT "bookmark_to_tag_bookmark_id_bookmark_id_fk" FOREIGN KEY ("bookmark_id") REFERENCES "bookmark"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookmark_to_tag" ADD CONSTRAINT "bookmark_to_tag_tag_id_bookmark_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "bookmark_tag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
