CREATE TABLE IF NOT EXISTS "microblog" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"raw_content" text NOT NULL,
	"html_content" text NOT NULL,
	"language" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "microblog_tag" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "microblog_tag_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "microblog_to_tag" (
	"microblog_id" integer,
	"tag_id" integer,
	CONSTRAINT microblog_to_tag_microblog_id_tag_id PRIMARY KEY("microblog_id","tag_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "microblog_to_tag" ADD CONSTRAINT "microblog_to_tag_microblog_id_microblog_id_fk" FOREIGN KEY ("microblog_id") REFERENCES "microblog"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "microblog_to_tag" ADD CONSTRAINT "microblog_to_tag_tag_id_microblog_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "microblog_tag"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
