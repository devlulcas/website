ALTER TABLE `bookmark` DROP FOREIGN KEY `bookmark_user_id_auth_user_id_fk`;

ALTER TABLE `auth_key` DROP FOREIGN KEY `auth_key_user_id_auth_user_id_fk`;

ALTER TABLE `auth_session` DROP FOREIGN KEY `auth_session_user_id_auth_user_id_fk`;

ALTER TABLE `auth_key` MODIFY COLUMN `user_id` varchar(255) NOT NULL;
ALTER TABLE `auth_session` MODIFY COLUMN `user_id` varchar(255) NOT NULL;