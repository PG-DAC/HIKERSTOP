-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Apr 16, 2022 at 12:41 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `a_id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`a_id`, `password`, `username`) VALUES
(1, '123456789', 'akash');

-- --------------------------------------------------------

--
-- Table structure for table `bookevent`
--

CREATE TABLE `bookevent` (
  `bookid` int(11) NOT NULL,
  `trekkersname` varchar(255) DEFAULT NULL,
  `bookdate` datetime(6) DEFAULT NULL,
  `eventname` varchar(255) DEFAULT NULL,
  `noofperson` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookevent`
--

INSERT INTO `bookevent` (`bookid`, `trekkersname`, `bookdate`, `eventname`, `noofperson`) VALUES
(40, NULL, '2022-05-08 05:30:00.000000', 'vasota trek', 1),
(44, NULL, '2022-04-16 05:30:00.000000', 'kalsubai trek', 1),
(46, NULL, '2022-04-21 05:30:00.000000', 'Ajinkyatara fort', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `c_id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `cname` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mob_no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password1` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `event_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`c_id`, `address`, `age`, `city`, `cname`, `email_id`, `gender`, `mob_no`, `password`, `password1`, `username`, `event_fk`) VALUES
(1, 'pune', 24, 'Pune', 'sanket', 'admin@gmail.com', 'Male', '1234569874', '123456789', '123456789', 'sanket', NULL),
(6, 'satara', 24, 'Pune', 'Akash Bhosale', 'admin@gmail.com', 'Male', '1234569874', '123456789', '123456789', 'akash', NULL),
(10, 'nashik', 24, 'Pune', 'sahil', 'admin@gmail.com', 'Male', '1234569874', '123456789', '123456789', 'sahil', NULL),
(11, 'pune', 24, 'Pune', 'amol', 'akashbhosale292@gmail.com', 'Male', '08888989898', '123456789', '123456789', 'amol', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `enquiryid` int(11) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `emailid` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`enquiryid`, `phone`, `emailid`, `fullname`, `message`) VALUES
(4, '08888989898', 'akashbhosale292@gmail.com', 'Akash Bhosale', 'what about ');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `eventid` int(11) NOT NULL,
  `availabilty` int(11) NOT NULL,
  `eventdate` varchar(255) NOT NULL,
  `eventname` varchar(255) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`eventid`, `availabilty`, `eventdate`, `eventname`, `price`) VALUES
(29, 20, '2022-04-24', 'Sandhan Valley', 4000),
(65, 30, '2022-05-01 05:30:00', 'vasota trek', 3000),
(66, 15, '2022-05-08 05:30:00', 'Ajinkyatara fort', 2000),
(68, 10, '2022-04-24 05:30:00', 'Rajgad Trek', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `eventbook`
--

CREATE TABLE `eventbook` (
  `bookid` int(11) NOT NULL,
  `eventname` varchar(255) NOT NULL,
  `bookdate` datetime(6) NOT NULL,
  `noofperson` int(11) NOT NULL,
  `customer_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `eventbook`
--

INSERT INTO `eventbook` (`bookid`, `eventname`, `bookdate`, `noofperson`, `customer_fk`) VALUES
(1, 'Akash Bhosale', '2022-04-10 05:30:00.000000', 2, NULL),
(2, 'Akash Bhosale,Sanket Desai', '2022-04-10 05:30:00.000000', 2, NULL),
(3, 'Akash Bhosale,Sanket Desai', '2022-04-10 05:30:00.000000', 5, NULL),
(4, 'Akash Bhosale,Sanket Desi', '2022-04-10 05:30:00.000000', 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `fid` int(11) NOT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`fid`, `comment`, `name`, `rating`) VALUES
(3, 'good', 'Akash Bhosale', 5),
(5, 'good ', 'Akash Bhosale', 5),
(7, 'good', 'Akash Bhosale', 4),
(8, 'good', 'Akash Bhosale', 4),
(9, 'good', 'Akash Bhosale', 4);

-- --------------------------------------------------------

--
-- Table structure for table `gen`
--

CREATE TABLE `gen` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gen`
--

INSERT INTO `gen` (`next_val`) VALUES
(69);

-- --------------------------------------------------------

--
-- Table structure for table `gen1`
--

CREATE TABLE `gen1` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gen1`
--

INSERT INTO `gen1` (`next_val`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(12);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `pid` int(11) NOT NULL,
  `noofperson` varchar(255) NOT NULL,
  `paydate` datetime(6) NOT NULL,
  `eventbook_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`pid`, `noofperson`, `paydate`, `eventbook_fk`) VALUES
(1, '2', '2022-04-15 05:30:00.000000', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `bookevent`
--
ALTER TABLE `bookevent`
  ADD PRIMARY KEY (`bookid`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`c_id`),
  ADD KEY `FKs6s50p4rirnsif1eewsk12nce` (`event_fk`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`enquiryid`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`eventid`);

--
-- Indexes for table `eventbook`
--
ALTER TABLE `eventbook`
  ADD PRIMARY KEY (`bookid`),
  ADD KEY `FK7yj1wyppmw99xabvcq31wderw` (`customer_fk`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `FKcnfrvmfio4l7bsmfdoc3jultk` (`eventbook_fk`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `FKs6s50p4rirnsif1eewsk12nce` FOREIGN KEY (`event_fk`) REFERENCES `event` (`eventid`);

--
-- Constraints for table `eventbook`
--
ALTER TABLE `eventbook`
  ADD CONSTRAINT `FK7yj1wyppmw99xabvcq31wderw` FOREIGN KEY (`customer_fk`) REFERENCES `customer` (`c_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `FKcnfrvmfio4l7bsmfdoc3jultk` FOREIGN KEY (`eventbook_fk`) REFERENCES `eventbook` (`bookid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
