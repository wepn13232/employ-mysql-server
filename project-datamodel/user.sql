create database `employManager`;
use `employManager`;

CREATE TABLE `employManager`.`userInfo` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
DEFAULT CHARACTER SET = utf8mb4;