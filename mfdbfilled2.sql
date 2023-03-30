-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: media_fast_db
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.10.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Action','2023-03-30 10:02:41','2023-03-30 10:02:41'),(2,'Comedy','2023-03-30 10:03:16','2023-03-30 10:03:16'),(3,'Drama','2023-03-30 10:03:24','2023-03-30 10:03:24'),(4,'Horror','2023-03-30 10:03:27','2023-03-30 10:03:27'),(5,'Science Fiction','2023-03-30 10:03:31','2023-03-30 10:03:31'),(6,'Adventure','2023-03-30 10:03:34','2023-03-30 10:03:34'),(7,'Romance','2023-03-30 10:03:37','2023-03-30 10:03:37'),(8,'Thriller','2023-03-30 10:03:40','2023-03-30 10:03:40'),(9,'Animation','2023-03-30 10:03:43','2023-03-30 10:03:43'),(10,'Documentary','2023-03-30 10:03:49','2023-03-30 10:03:49');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` enum('movie','show') NOT NULL,
  `season` int NOT NULL,
  `season_episodes` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'Breaking Bad','A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.','show',1,101,'2023-03-30 0sql76098419:57:24','2023-03-30 09:57:24'),(2,'The Godfather','The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.','movie',1,1,'2023-03-30 09:57:53','2023-03-30 09:57:53'),(3,'Stranger Things','When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.','show',2,204,'2023-03-30 09:58:04','2023-03-30 09:58:04'),(4,'The Dark Knight','When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.','movie',1,1,'2023-03-30 09:58:19','2023-03-30 09:58:19'),(5,'Game of Thrones','Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.','show',3,309,'2023-03-30 09:58:31','2023-03-30 09:58:31'),(6,'Inception','A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.','movie',1,1,'2023-03-30 09:58:48','2023-03-30 09:58:48'),(7,'Breaking Bad','A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.','show',2,203,'2023-03-30 09:59:31','2023-03-30 09:59:31'),(8,'The Matrix','A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.','movie',1,1,'2023-03-30 09:59:45','2023-03-30 09:59:45'),(9,'Stranger Things','When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.','show',1,105,'2023-03-30 09:59:53','2023-03-30 09:59:53');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_category`
--

DROP TABLE IF EXISTS `media_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `media_category` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `mediumId` int NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`mediumId`,`categoryId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `media_category_ibfk_1` FOREIGN KEY (`mediumId`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `media_category_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_category`
--

LOCK TABLES `media_category` WRITE;
/*!40000 ALTER TABLE `media_category` DISABLE KEYS */;
INSERT INTO `media_category` VALUES ('2022-02-02 00:00:00','2022-02-02 00:00:00',1,1),('2022-02-02 00:00:00','2022-02-02 00:00:00',2,3),('2022-02-02 00:00:00','2022-02-02 00:00:00',3,2),('2022-02-02 00:00:00','2022-02-02 00:00:00',4,5),('2022-02-02 00:00:00','2022-02-02 00:00:00',6,6);
/*!40000 ALTER TABLE `media_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_platform`
--

DROP TABLE IF EXISTS `media_platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `media_platform` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `mediumId` int NOT NULL,
  `platformId` int NOT NULL,
  PRIMARY KEY (`mediumId`,`platformId`),
  KEY `platformId` (`platformId`),
  CONSTRAINT `media_platform_ibfk_1` FOREIGN KEY (`mediumId`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `media_platform_ibfk_2` FOREIGN KEY (`platformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_platform`
--

LOCK TABLES `media_platform` WRITE;
/*!40000 ALTER TABLE `media_platform` DISABLE KEYS */;
INSERT INTO `media_platform` VALUES ('2022-02-02 00:00:00','2022-02-02 00:00:00',1,1),('2022-02-02 00:00:00','2022-02-02 00:00:00',2,3),('2022-02-02 00:00:00','2022-02-02 00:00:00',3,1),('2022-02-02 00:00:00','2022-02-02 00:00:00',4,5),('2022-02-02 00:00:00','2022-02-02 00:00:00',5,5),('2022-02-02 00:00:00','2022-02-02 00:00:00',6,2),('2022-02-02 00:00:00','2022-02-02 00:00:00',7,1),('2022-02-02 00:00:00','2022-02-02 00:00:00',8,4),('2022-02-02 00:00:00','2022-02-02 00:00:00',9,9);
/*!40000 ALTER TABLE `media_platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `platforms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `platform_url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (100,'Netflix','https://www.netflix.com/','2023-03-30 10:05:20','2023-03-30 10:05:20'),(200,'Amazon Prime Video','https://www.amazon.com/primevideo','2023-03-30 10:05:40','2023-03-30 10:05:40'),(300,'Hulu','https://www.hulu.com/','2023-03-30 10:05:51','2023-03-30 10:05:51'),(400,'Disney+','https://www.disneyplus.com/','2023-03-30 10:05:57','2023-03-30 10:05:57'),(500,'HBO Max','https://www.hbomax.com/','2023-03-30 10:06:06','2023-03-30 10:06:06'),(600,'Peacock','https://www.peacocktv.com/','2023-03-30 10:06:30','2023-03-30 10:06:30'),(700,'Apple TV+','https://www.apple.com/apple-tv-plus','2023-03-30 10:06:34','2023-03-30 10:06:34'),(800,'Paramount+','https://www.paramountplus.com/','2023-03-30 10:06:37','2023-03-30 10:06:37'),(900,'Crave','https://www.crave.ca/','2023-03-30 10:06:41','2023-03-30 10:06:41');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `private_infos`
--

DROP TABLE IF EXISTS `private_infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `private_infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `date_of_birth` datetime NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `private_infos_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `private_infos`
--

LOCK TABLES `private_infos` WRITE;
/*!40000 ALTER TABLE `private_infos` DISABLE KEYS */;
INSERT INTO `private_infos` VALUES (1,'usuario123@example.com','1998-05-08 23:00:00','$2b$10$PZM3y/3KpxH1RjyZaxdTdOGbtRH4eMBX0zJoGP1iZ69H.xpP.qoB6','2023-03-30 09:51:42','2023-03-30 09:51:42',3),(2,'tiochulo@example.com','1989-02-12 00:00:00','$2b$10$Z/FfTXOeHS7b18zBi7/moOu.39L50vQ/WUrzCA2vfBpmqjsv2xFHe','2023-03-30 09:52:08','2023-03-30 09:52:08',4),(3,'gurudetecnologia@example.com','1995-10-03 00:00:00','$2b$10$2fWfxinWEJkjW4ticIBbNeBoaIdueZHFFb4fmTKLX67XoabovR33.','2023-03-30 09:52:18','2023-03-30 09:52:18',5),(4,'jugon123@example.com','1997-07-31 23:00:00','$2b$10$EB.g2PHVGHV1WTx7P7.UOuO3cmJG6Hof5PSn4rFTdc.rOYDYujUMW','2023-03-30 09:53:13','2023-03-30 09:53:13',9),(5,'mar@mail.com','1997-04-26 23:00:00','$2b$10$J/7NP56WJPKxLMW6bGvicOZbcGOgJfeNY/msbMEzPB2OM8C7g7LA2','2023-03-30 10:16:40','2023-03-30 10:16:40',11);
/*!40000 ALTER TABLE `private_infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_category` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `categoryId` int NOT NULL,
  PRIMARY KEY (`userId`,`categoryId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `user_category_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_category_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_media`
--

DROP TABLE IF EXISTS `user_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `user_media` (
  `status` enum('finished','rejected','pending','notOffered') DEFAULT 'notOffered',
  `rejected_counter` int DEFAULT '0',
  `last_seen` tinyint(1) DEFAULT '0',
  `episode_counter` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `mediumId` int NOT NULL,
  PRIMARY KEY (`userId`,`mediumId`),
  KEY `mediumId` (`mediumId`),
  CONSTRAINT `user_media_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_media_ibfk_2` FOREIGN KEY (`mediumId`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_media`
--

LOCK TABLES `user_media` WRITE;
/*!40000 ALTER TABLE `user_media` DISABLE KEYS */;
INSERT INTO `user_media` VALUES ('notOffered',0,0,0,'2023-03-30 10:20:57','2023-03-30 10:20:57',3,1),('notOffered',0,0,0,'2023-03-30 10:20:54','2023-03-30 10:20:54',3,3),('notOffered',0,0,0,'2023-03-30 10:21:42','2023-03-30 10:21:42',11,2),('notOffered',0,0,0,'2023-03-30 10:21:44','2023-03-30 10:21:44',11,5),('notOffered',0,0,0,'2023-03-30 10:21:45','2023-03-30 10:21:45',11,6),('notOffered',0,0,0,'2023-03-30 10:21:46','2023-03-30 10:21:46',11,9);
/*!40000 ALTER TABLE `user_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) NOT NULL,
  `img_url` varchar(255) DEFAULT 'https://www.gravatar.com/robohash/205e460b439e2e57482ec07740c08d40?f=y&s=400',
  `role` enum('admin','user') DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'usuario123','https://www.robohash.com/usuario123','user','2023-03-30 09:51:42','2023-03-30 09:51:42'),(4,'tiochulo','https://www.robohash.com/tiochulo','user','2023-03-30 09:52:08','2023-03-30 09:52:08'),(5,'gurudetecnologia','https://www.robohash.com/gurudetecnologia','user','2023-03-30 09:52:18','2023-03-30 09:52:18'),(9,'jugon123','https://www.robohash.com/jugon123','user','2023-03-30 09:53:13','2023-03-30 09:53:13'),(11,'Marinass','https://www.robohash.com/Marinass','user','2023-03-30 10:16:40','2023-03-30 10:16:40');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-30 11:34:19
