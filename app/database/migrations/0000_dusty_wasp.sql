CREATE TABLE `questions` (
	`question_id` integer PRIMARY KEY NOT NULL,
	`message` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
