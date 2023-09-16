-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2023 at 08:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_phone` varchar(50) NOT NULL,
  `user_nid` varchar(17) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_nid`) VALUES
(1, 'Miraj', 'skmirajbn@gmail.com', '354564', '685746854'),
(2, 'Miraj', 'skmirajbn@gmail.com', '354564', '685746854'),
(3, 'Miraj', 'skmirajbn@gmail.com', '354564', '685746854'),
(4, 'sdga', 'asdg', 'asdg', '3546545'),
(5, 'Miraj', 'skmirajbn@gmail.com', '0354545', '625626'),
(6, 'Sheuly', 'sedg@gmail.com', '35453', '524135'),
(7, 'Miraj', 'skmraij@gmail.com', '03213241', '54354'),
(10, 'Sheuly', 'seuly@gmail.co', '0354231', '53454'),
(11, 'Sheuly', 'seuly@gmail.co', '0354231', '53454'),
(12, 'Birsty', 'bristy@gmail.com', '5454541', '53454'),
(14, 'asdg453', 'asdg453', 'asdg453', '45543');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
