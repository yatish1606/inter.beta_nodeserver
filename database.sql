CREATE TABLE `registration` (
  'id' int NOT NULL AUTO_INCREMENT,
  'name' varchar(250) DEFAULT NULL,
  'email' varchar(50) DEFAULT NULL,
  'password' varchar(250) DEFAULT NULL,
   'company' varchar (250) DEFAULT NULL,
   'designation' varchar (250) DEFAULT NULL
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;