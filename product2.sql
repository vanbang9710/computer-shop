-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: computershop
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL DEFAULT '1000',
  `name` varchar(161) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `thumb` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `manufacturer` varchar(9) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `model` varchar(54) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `color` varchar(107) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `processor` varchar(181) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `maxMemory` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `graphicProcessor` varchar(135) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `hardDrives` varchar(175) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `optDrives` varchar(12) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `securities` varchar(509) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `display` varchar(190) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `webcam` varchar(70) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `audio` varchar(240) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `wiredConnection` varchar(62) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `wirelessConnection` varchar(208) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `ports` varchar(435) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `battery` varchar(111) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `dimensions` varchar(117) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `weight` varchar(56) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `os` varchar(130) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  `accessories` varchar(73) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT 'NULL',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_22cc43e9a74d7498546e9a63e7` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-28 17:01:34
