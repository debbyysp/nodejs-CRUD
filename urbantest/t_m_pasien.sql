-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Inang: 127.0.0.1
-- Waktu pembuatan: 11 Agu 2016 pada 22.28
-- Versi Server: 5.5.27
-- Versi PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Basis data: `rumahsakit`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `t_m_pasien`
--

CREATE TABLE IF NOT EXISTS `t_m_pasien` (
  `ID` varchar(10) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Address` varchar(100) NOT NULL,
  `RTRW` varchar(10) DEFAULT NULL,
  `Kelurahan` varchar(25) DEFAULT NULL,
  `Gender` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `t_m_pasien`
--

INSERT INTO `t_m_pasien` (`ID`, `Name`, `Username`, `Password`, `Phone`, `Address`, `RTRW`, `Kelurahan`, `Gender`) VALUES
('1606150001', 'Administrator', 'admin', 'admin', '-', '-', '-', '-', 'Lakilaki'),
('1606150002', 'Thepie', 'Thepie', 'Thepie', '081376156666', 'Jakardta', '45/23', 'asek', 'Lakilaki'),
('2016080000', 'Debby Sischa Pardede', 'sischa', 'sischa', '082165717500', 'Jl. Maliki no. 43, Halim Perdana Kusuma, Kec. Kamp. Makasar', '06/15', 'Halim Perdana Kusuma', 'female');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
