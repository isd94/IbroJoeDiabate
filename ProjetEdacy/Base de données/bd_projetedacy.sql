-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 26 oct. 2018 à 17:30
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bd_projetedacy`
--

-- --------------------------------------------------------

--
-- Structure de la table `classes`
--

DROP TABLE IF EXISTS `classes`;
CREATE TABLE IF NOT EXISTS `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomClasse` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `classes`
--

INSERT INTO `classes` (`id`, `nomClasse`) VALUES
(1, 'Premiere S1'),
(2, 'Premiere S2'),
(3, 'Seconde S1'),
(4, 'Seconde S2'),
(5, 'Terminale S1'),
(6, 'Terminale S2');

-- --------------------------------------------------------

--
-- Structure de la table `eleves`
--

DROP TABLE IF EXISTS `eleves`;
CREATE TABLE IF NOT EXISTS `eleves` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `matricule` varchar(10) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `dateNaissance` date NOT NULL,
  `classe` varchar(15) NOT NULL,
  `filiations` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `eleves`
--

INSERT INTO `eleves` (`id`, `matricule`, `nom`, `prenom`, `dateNaissance`, `classe`, `filiations`) VALUES
(1, 'TS2108', 'Penda', 'SARR', '1995-12-04', 'Teminale S2', 'Demba SARR  et Bintou DRAME'),
(2, 'TL2018', 'CAMARA', 'Abdoulaye', '1993-10-02', 'Terminale L1a', 'Oumar et Mariam FAYE'),
(3, 'TS2018', 'SYLLA', 'Oumar', '1998-10-09', 'Teminale S1', 'Aliou et Coumba TALL'),
(4, 'TL2018', 'WADE', 'Ousmane', '1997-10-01', 'Premiere', 'Alhassane et Binta MBAYE'),
(5, 'TS2018', 'SENE', 'Ndiate', '2018-10-08', 'Teminale S1', 'Moustapha et Awa NDIONGUE'),
(6, 'TL2018', 'DJIGO', 'Mamadou', '2018-10-09', 'Terminale L1a', 'Ibou et Fatou SY'),
(7, 'TL2018', 'BA', 'Maréma', '1996-12-12', 'Premiere', 'Fodé et Sarata HAÎDARA'),
(8, 'TS2018', 'VAVASSEUR', 'Carine', '1999-11-11', 'Seconde', 'Alex et Gorgette LAMBEAU'),
(9, 'TL2018', 'TRAORE', 'Julie', '1998-12-12', 'Seconde', 'Ammar et Nafissatou NGOME'),
(10, 'TS2018', 'BREMSKY', 'The Boss', '2018-12-12', 'Terminale', 'Konko et Malela ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
