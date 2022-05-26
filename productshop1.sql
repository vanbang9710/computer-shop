-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: productshop
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
  `name` varchar(255) NOT NULL,
  `thumb` varchar(255) NOT NULL DEFAULT '',
  `price` int NOT NULL,
  `manufacturer` varchar(255) NOT NULL DEFAULT '',
  `model` varchar(255) NOT NULL DEFAULT '',
  `color` varchar(255) NOT NULL DEFAULT '',
  `processor` varchar(255) NOT NULL DEFAULT '',
  `maxMemory` varchar(255) NOT NULL DEFAULT '',
  `graphicProcessor` varchar(255) NOT NULL DEFAULT '',
  `hardDrives` varchar(255) NOT NULL DEFAULT '',
  `optDrives` varchar(255) NOT NULL DEFAULT '',
  `display` varchar(255) NOT NULL DEFAULT '',
  `webcam` varchar(255) NOT NULL DEFAULT '',
  `audio` varchar(255) NOT NULL DEFAULT '',
  `wiredConnection` varchar(255) NOT NULL DEFAULT '',
  `wirelessConnection` varchar(255) NOT NULL DEFAULT '',
  `ports` varchar(500) NOT NULL,
  `battery` varchar(255) NOT NULL DEFAULT '',
  `dimensions` varchar(255) NOT NULL DEFAULT '',
  `weight` varchar(255) NOT NULL DEFAULT '',
  `os` varchar(255) NOT NULL DEFAULT '',
  `accessories` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_22cc43e9a74d7498546e9a63e7` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Laptop Asus Gaming TUF FX517ZC-HN079W (i5 12450H/8GB RAM/512GB SSD/15.6 FHD 144hz/RTX 3050 4GB/Win11/Trß║»ng)','https://hanoicomputercdn.com/media/product/250_64858_laptop_asus_gaming_tuf_fx517zc_5.png',26499000,'Asus','FX517ZC-HN079W','Moonlight White','12th Gen Intel┬« CoreΓäó i5-12450H Processor 2 GHz (12M Cache up to 4.4 GHz 8 cores:4 P-cores and 4 E-cores)','32GB','','512GB M.2 NVMeΓäó PCIe┬« 3.0 SSD','N/A','15.6-inch FHD (1920 x 1080) 16:9NTSC:45% Brightness :250 nnits; 144Hz','720P┬áHD camera','','10/100/1000 Mbps','Wi-Fi 6(802.11ax)+Bluetooth 5.2 (Dual band) 2*2(*BT version may change with OS upgrades.)','1x RJ45 LAN port1x ThunderboltΓäó 4 support DisplayPortΓäó1x USB 3.2 Gen 2 Type-C support DisplayPortΓäó / power delivery / G-SYNC2x USB 3.2 Gen 1 Type-A//1x┬á3.5mm┬áCombo┬áAudio┬áJack','76WHrs 4S1P 4-cell Li-ion','35.4 x 25.1 x 1.99 ~ 2.07 cm','','Windows 11 Home','D├óy sß║íc pin sß║íc s├ích h╞░ß╗¢ng dß║½n sß╗¡ dß╗Ñng'),(2,'Laptop Asus Vivobook Pro 14X OLED M7400QC-KM013W (R5 5600H/16GB RAM/512GB SSD/14 Oled 2.8K/RTX3050 4GB/Win11/─Éen)','https://hanoicomputercdn.com/media/product/250_62576_laptop_asus_vivobook_m7400qc_18.jpg',27999000,'Asus','M7400QC-KM013W','0┬░Black','AMD RyzenΓäó 5 5600H Mobile Processor (6-core/12-thread 19MB cache up to 4.2 GHz max boost)','16GB','NVIDIA┬«┬áGeForce┬«┬áRTXΓäó┬á3050┬áLaptop┬áGPU','512GB M.2 NVMeΓäó PCIe┬« 3.0 SSD','None','14 inch//OLED//600nits//WQXGA+ (2880 x 1800) 16:10//Anti-Glare//100% DCI-P3 color gamut 90Hz','720p HD camera','Built-in speaker\\nBuilt-in array microphone//harman/kardon (Mainstream)','','Intel Wi-Fi 6(Gig+)(802.11ax)','1x HDMI 1.4//1x 3.5mm Combo Audio Jack//\\nMicro SD card reader','63WHrs 3S1P 3-cell Li-ion','31.74(W) x 22.85(D) x 1.79 ~ 1.79(H) cm','1.20 kg (Without Battery)\\n1.45 kg (with 3 cell battery)','Windows 11 bß║ún quyß╗ün',''),(3,'Laptop Acer Gaming Nitro 5 Tiger AN515-58-52SP (NH.QFHSV.001) (i5 12500H/8GB Ram/512GB SSD/RTX3050 4G/15.6 inch FHD 144Hz/Win 11/─Éen) (2022)','https://hanoicomputercdn.com/media/product/250_63453_laptop_acer_gaming_nitro_5_tiger_an515_58_9.jpg',25999000,'Acer','Nitro 5 AN515-58-52SP (2022)','─Éen (Obsidian Black)','Intel┬« CoreΓäó i5-12500H (up to 4.5Ghz 18MB cache) ΓÇô CPU thß║┐ hß╗ç 12 mß╗¢i nhß║Ñt','32GB','NVIDIA┬« GeForce┬« RTX 3050 4G-GDDR6','512GB PCIe NVMe SED SSD (n├óng cß║Ñp tß╗æi ─æa 2TB Gen4 16 Gb/s NVMe v├á 1 TB 2.5-inch 5400 RPM; 2 khe M.2)','None','15.6 inch FHD IPS (1920 x 1080) 144Hz slim benzel','HD','Acer TrueHarmony technology; Acer Purified','Gigabit','802.11 SX +Bluetooth 5.0','1 x USB Type-C port supporting:ΓÇó USB 3.2 Gen 2 (up to 10 Gbps) ΓÇó DisplayPort over USB-C ΓÇó Thunderbolt 4 ΓÇó USB charging 5 V; 3 A ΓÇó DC-in port 20 V; 65 W 1 x USB 3.2 Gen 2 port featuring power-off USB charging 1 USB 3.2 Gen 2 port 1 x USB 3.2 Gen 1 port 1 x Ethernet (RJ-45) port 1 x HDMI┬«2.1 port with HDCP support 1 x 3.5 mm headphone/speaker jack supporting headsets with built-in microphone 1 x DC-in jack for AC adapter','4 cell 57.5 Wh','','2.5 kg','Win 11 Home','Cable + Sß║íc'),(4,'Laptop Acer Gaming Nitro 5 AN515-57-5669 (NH.QEHSV.001) (i5 11400H/8GBRam/512GB SSD/GTX1650 4G/15.6 inch FHD 144Hz/Win 11/─Éen) (2021)','https://hanoicomputercdn.com/media/product/250_62693_laptop_acer_gaming_nitro_5_eagle_63.png',20999000,'Acer','Nitro 5 AN515-57-5669 (2021)','─Éen','Intel┬« CoreΓäó i5-11400H (2.7Ghz up to 4.5Ghz 12MB cache)','32GB','NVIDIA┬« GeForce┬« GTX 1650 4G-GDDR6','512GB SSD PCIe NVMe(n├óng cß║Ñp tß╗æi ─æa 2TB SSD PCIe Gen3 8 Gb/s NVMe v├á 2TB HDD 2.5-inch 5400 RPM)','None','15.6 inch FHD IPS (1920 x 1080) 144Hz slim benzel','HD','Acer TrueHarmony technology; Acer Purified','Gigabit','802.11 SX +Bluetooth 5.0','1 x USB 3.2 Gen 2 port featuring power-off USB charging; 2 x USB 3.2 Gen 1 ports; 1 x Ethernet (RJ-45) port; 1 x HDMI┬«2.0 port with HDCP support; DC-in jack for AC adapter','57 Wh','','2.2 kg','Win 11 Home','Cable + Sß║íc'),(5,'Laptop Asus Gaming TUF FA506IHR-HN019W (R5 4600H/8GB RAM/512GB SSD/15.6 FHD 144hz/GTX 1650 4GB/Win11/─Éen)','https://hanoicomputercdn.com/media/product/250_64019_laptop_asus_gaming_tuf_fa506ihr_9.jpg',17999000,'Asus','FA506IHR-HN019W','─Éen','AMD RyzenΓäó 5 4600H Mobile Processor (6C/12T 11MB Cache 4.0 GHz Max Boost)','32GB','NVIDIA┬«┬áGeForce┬áGTXΓäó┬á1650','512GB M.2 NVMeΓäó PCIe┬« 3.0 SSD','N/A','15.6-inch FHD (1920 x 1080) 16:9NTSC:45% Brightness :250nits  144Hz','720P┬áHD camera','DTS software','10/100/1000 Mbps','Wi-Fi 6(802.11ax)+Bluetooth 5.2 (Dual band) 2*2(*BT version may change with OS upgrades.)','3x USB 3.2 Gen 1 Type-A//1x USB 3.2 Gen 2 Type-C support DisplayPortΓäó//1x┬á3.5mm┬áCombo┬áAudio┬áJack','48WHrs 3S1P 3-cell Li-ion','35.9 x 25.6 x 2.28 ~ 2.45 cm','2.30 Kg','Windows 11 bß║ún quyß╗ün.','D├óy sß║íc pin sß║íc s├ích h╞░ß╗¢ng dß║½n sß╗¡ dß╗Ñng'),(6,'Laptop Acer Gaming Nitro 5 Eagle AN515-57-54MV (NH.QENSV.003) (i5 11400H/8GB Ram/512GB SSD/RTX3050 4G/15.6 inch FHD 144Hz/Win 11 mß╗¢i nhß║Ñt/─Éen) (2021)','https://hanoicomputercdn.com/media/product/250_60790_laptop_acer_gaming_nitro_5_eagle_17.png',23489000,'Acer','Nitro 5 AN515-57-54MV (2021)','─Éen','Intel┬« CoreΓäó i5-11400H ΓÇô CPU thß║┐ hß╗ç 11 mß╗¢i nhß║Ñt','32GB','NVIDIA┬« GeForce┬« RTX 3050 4G-GDDR6','512GB SSD PCIe NVMe(n├óng cß║Ñp tß╗æi ─æa 2TB SSD PCIe Gen3 8 Gb/s NVMe v├á 2TB HDD 2.5-inch 5400 RPM)','None','15.6 inch FHD IPS 144Hz SlimBezel Acer ComfyView LED-backlit','HD','Acer TrueHarmony technology; Acer Purified','Gigabit','802.11 ax +Bluetooth 5.1','1 x USB Type C; 1xUSB 3.2 Gen 1 port featuring power-off USB charging; 2xUSB 3.2 Gen 1 ports; 1xEthernet (RJ-45) port; 1xHDMI┬« 2.0','57.5 Wh','363.4 (W) x 255 (D) x 23.9 (H) mm','2.2 kg','Win 11','Cable + Sß║íc');
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

-- Dump completed on 2022-05-27  0:15:50
