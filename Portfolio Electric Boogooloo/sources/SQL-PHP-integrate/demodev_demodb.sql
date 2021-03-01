-- MariaDB dump 10.18  Distrib 10.4.17-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: demodev
-- ------------------------------------------------------
-- Server version	10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `demodb`
--

DROP TABLE IF EXISTS `demodb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `demodb` (
  `First-Name` varchar(45) NOT NULL,
  `Last-Name` varchar(45) NOT NULL,
  `Age` varchar(45) NOT NULL,
  `Size` varchar(45) NOT NULL,
  `Hair-Color` varchar(45) NOT NULL,
  `Eye-Color` varchar(45) NOT NULL,
  PRIMARY KEY (`First-Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `demodb`
--

LOCK TABLES `demodb` WRITE;
/*!40000 ALTER TABLE `demodb` DISABLE KEYS */;
INSERT INTO `demodb` VALUES ('Aldercroft','Kai','21','9.3 Feet','Brown','Green'),('Alexandra','James','17','7.1 Feet','Dark-Black','Gold'),('Cain','Alcurd','18','6.11 Feet','Blonde','Red'),('Clayton','Harris','19','6.1 Feet','Light-Brown','Blue'),('Colt','Jaguer','15','6.9 Feet','Black','Cyan'),('Diego','Morales','16','7.4 Feet','Dark-Black','Gold'),('Drakion','Iak','22','7.3 Feet','Black','Blue'),('Murice','Yian','16','9.9 Feet','Light-Black','Red'),('Singalliath','Tforcredla','19','6.8 Feet','Light-Brown','Red'),('Siren','Yian','13','5.9 Feet','Black','Red-Yellow');
/*!40000 ALTER TABLE `demodb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-09 15:58:05
