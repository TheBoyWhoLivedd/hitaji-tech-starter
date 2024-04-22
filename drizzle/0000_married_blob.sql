DO $$ BEGIN
 CREATE TYPE "mentee-register_label" AS ENUM('bug', 'feature', 'enhancement', 'documentation');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "mentee-register_priority" AS ENUM('low', 'medium', 'high');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "mentee-register_status" AS ENUM('todo', 'in-progress', 'done', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mentee-register_tasks" (
	"id" varchar(128) PRIMARY KEY NOT NULL,
	"code" varchar(255),
	"title" varchar(255),
	"status" "mentee-register_status" DEFAULT 'todo' NOT NULL,
	"label" "mentee-register_label" DEFAULT 'bug' NOT NULL,
	"priority" "mentee-register_priority" DEFAULT 'low' NOT NULL,
	CONSTRAINT "mentee-register_tasks_code_unique" UNIQUE("code")
);
