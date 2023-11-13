ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_name_unique" UNIQUE("name");--> statement-breakpoint
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_url_unique" UNIQUE("url");