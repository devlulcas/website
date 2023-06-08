CREATE TABLE `bookmark` (
	`id` varchar(255) PRIMARY KEY NOT NULL,
	`name` varchar(280) NOT NULL,
	`url` varchar(280) NOT NULL,
	`about` varchar(560) NOT NULL,
	`tags` json DEFAULT ('[]'),
	`search_terms` varchar(560) NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp);

CREATE TABLE `auth_key` (
	`id` varchar(255) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`primary_key` boolean NOT NULL,
	`hashed_password` varchar(255),
	`expires` bigint);

CREATE TABLE `auth_session` (
	`id` varchar(128) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL);

CREATE TABLE `auth_user` (
	`id` varchar(255) PRIMARY KEY NOT NULL,
	`email` varchar(255) NOT NULL,
	`role` enum('ADMIN','USER') NOT NULL DEFAULT 'USER',
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`deleted_at` timestamp);

CREATE UNIQUE INDEX `search_term_idx` ON `bookmark` (`search_terms`);
ALTER TABLE `bookmark` ADD CONSTRAINT `bookmark_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;
ALTER TABLE `auth_key` ADD CONSTRAINT `auth_key_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;
ALTER TABLE `auth_session` ADD CONSTRAINT `auth_session_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;