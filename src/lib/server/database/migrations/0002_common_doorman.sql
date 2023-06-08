CREATE TABLE `auth_profile` (
	`user_id` varchar(255) PRIMARY KEY NOT NULL,
	`avatar_url` varchar(255),
	`github_profile_url` varchar(255));

ALTER TABLE `auth_user` ADD `username` varchar(255);
ALTER TABLE `auth_user` ADD `banned` boolean DEFAULT false NOT NULL;