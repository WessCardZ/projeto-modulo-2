CREATE DATABASE  IF NOT EXISTS `perfil` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `perfil`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: perfil
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `localizacao`
--

DROP TABLE IF EXISTS `localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localizacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao`
--

LOCK TABLES `localizacao` WRITE;
/*!40000 ALTER TABLE `localizacao` DISABLE KEYS */;
INSERT INTO `localizacao` VALUES (1,'Satuba','AL'),(2,'Rio Largo','AL'),(3,'Rio Largo','AL'),(4,'Rio Largo','AL'),(5,'Rio Largo','AL'),(6,'Rio Largo','AL'),(7,'Rio Largo','AL'),(8,'Maceió','AL');
/*!40000 ALTER TABLE `localizacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfil`
--

DROP TABLE IF EXISTS `perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfil` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `matricula` int DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `cpf` varchar(11) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `localizacao_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `cpf_2` (`cpf`),
  UNIQUE KEY `cpf_3` (`cpf`),
  UNIQUE KEY `cpf_4` (`cpf`),
  UNIQUE KEY `cpf_5` (`cpf`),
  UNIQUE KEY `cpf_6` (`cpf`),
  UNIQUE KEY `cpf_7` (`cpf`),
  UNIQUE KEY `cpf_8` (`cpf`),
  UNIQUE KEY `cpf_9` (`cpf`),
  UNIQUE KEY `cpf_10` (`cpf`),
  UNIQUE KEY `cpf_11` (`cpf`),
  UNIQUE KEY `cpf_12` (`cpf`),
  UNIQUE KEY `cpf_13` (`cpf`),
  UNIQUE KEY `cpf_14` (`cpf`),
  UNIQUE KEY `cpf_15` (`cpf`),
  UNIQUE KEY `cpf_16` (`cpf`),
  UNIQUE KEY `cpf_17` (`cpf`),
  UNIQUE KEY `cpf_18` (`cpf`),
  UNIQUE KEY `cpf_19` (`cpf`),
  UNIQUE KEY `matricula` (`matricula`),
  UNIQUE KEY `matricula_2` (`matricula`),
  UNIQUE KEY `matricula_3` (`matricula`),
  UNIQUE KEY `matricula_4` (`matricula`),
  UNIQUE KEY `matricula_5` (`matricula`),
  UNIQUE KEY `matricula_6` (`matricula`),
  UNIQUE KEY `matricula_7` (`matricula`),
  UNIQUE KEY `matricula_8` (`matricula`),
  UNIQUE KEY `matricula_9` (`matricula`),
  UNIQUE KEY `matricula_10` (`matricula`),
  UNIQUE KEY `matricula_11` (`matricula`),
  UNIQUE KEY `matricula_12` (`matricula`),
  UNIQUE KEY `matricula_13` (`matricula`),
  UNIQUE KEY `matricula_14` (`matricula`),
  UNIQUE KEY `matricula_15` (`matricula`),
  UNIQUE KEY `matricula_16` (`matricula`),
  UNIQUE KEY `matricula_17` (`matricula`),
  UNIQUE KEY `matricula_18` (`matricula`),
  UNIQUE KEY `matricula_19` (`matricula`),
  KEY `localizacao_id` (`localizacao_id`),
  CONSTRAINT `perfil_ibfk_1` FOREIGN KEY (`localizacao_id`) REFERENCES `localizacao` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfil`
--

LOCK TABLES `perfil` WRITE;
/*!40000 ALTER TABLE `perfil` DISABLE KEYS */;
INSERT INTO `perfil` VALUES (1,'Luan Oliveira dos Santos',2020328223,22,'2001-05-17','65444267845','https://web.whatsapp.com/865dc827-5627-4b32-a8e9-47c73728a1a5',1),(2,'Alessandra Pereira de França',2022337197,19,'2004-02-02','71396088490','https://drive.google.com/file/d/1SZY5jEWugIiHdnXPtZhuTs2JjwvrkG5J/view?usp=sharing',2),(3,'Rebeca Vital de Araújo',20224050,20,'2003-05-17','2022337203','https://drive.google.com/file/d/1mqZprcLJavqBbutab6h7_Dg1QSE8fn5z/view',3),(4,'Robert Alan Morais de Albuquerque',2022336064,18,'2004-08-06','86166593236','https://drive.google.com/file/d/1cnoHuN360kuFe_FBLvY5DAYMnm_08UuZ/view',4),(5,'Wesley da Silva Cardozo',2022336206,19,'2004-04-01','09672739516','https://pps.whatsapp.net/v/t61.24694-24/342520251_800788084365254_4643696113060068285_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQD3w9qxymMK3XvgJs2fwIYKzJiNFuJ-OGHiy_dotxZVw&oe=649E1223',5),(6,'Whydger Silva Ferreira Fernandes',2021333095,25,'1997-09-17','73320026470','https://drive.google.com/file/d/1FcAgFqwmpHuEu8Abmm4pqPRwNqF1QEQp/view',8),(7,'Mayara Emillyn Leopoldino da Silva',2022336055,19,'2003-09-27','17731156699','https://drive.google.com/file/d/1tqU8ATXySRmvq0N7ybCKAYgztjd5fZrf/view',6),(8,'Shara Raiane da Silva Santos',2022337188,19,'2004-05-05','51573551490','https://drive.google.com/file/d/1EF4YfKRi3YfAp9eHHamdRA6VgOnObguf/view',7);
/*!40000 ALTER TABLE `perfil` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19 22:14:12
