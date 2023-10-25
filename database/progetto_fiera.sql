-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 05, 2023 alle 11:48
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `progetto_fiera`

DROP SCHEMA IF EXISTS  progetto_fiera;
CREATE SCHEMA progetto_fiera;
USE progetto_fiera;

-- --------------------------------------------------------

--
-- Struttura della tabella `fiere`
--

CREATE TABLE `fiere` (
  `name_conference` varchar(255) NOT NULL,
  `regione` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `map` varchar(255) DEFAULT NULL,
  `download_map` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `fiere`
--

INSERT INTO `fiere` (`name_conference`, `regione`, `city`, `address`, `date`, `website`, `type`, `map`, `download_map`) VALUES
('Nerd Show', 'Emilia Romagna', 'Bologna', 'Via della fiera 20A', 'Marzo', 'www.nerdshow.it', 'Comics', NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `pavilion`
--

CREATE TABLE `pavilion` (
  `n_pavilion` varchar(5) NOT NULL,
  `name_conference` varchar(255) NOT NULL DEFAULT 'Nerd Show'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `pavilion`
--

INSERT INTO `pavilion` (`n_pavilion`, `name_conference`) VALUES
('21', 'Nerd Show'),
('29', 'Nerd Show'),
('30', 'Nerd Show');

-- --------------------------------------------------------

--
-- Struttura della tabella `stand`
--

CREATE TABLE `stand` (
  `n_stand` varchar(5) NOT NULL,
  `name_stand` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `n_pavilion` varchar(5) NOT NULL DEFAULT '21',
  `website` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `stand`
--

INSERT INTO `stand` (`n_stand`, `name_stand`, `category`, `description`, `n_pavilion`, `website`) VALUES
('143', 'BIG AMERICAN', 'Food', 'Vendita prodotti alimentari tipici americani', '29', 'www.bigamerican.com'),
('145', 'AMARO – TATTOOS', 'Tattoos', 'Empty', '21', 'https://www.instagram.com/amaro_tattoos/?hl=it'),
('148', 'CHLEXART & TOTE. ACKERMAN', NULL, NULL, '21', NULL),
('149', 'FANTASTICHE PACCOTTIGLIE', 'Accessori', NULL, '21', 'https://www.instagram.com/fantastiche.paccottiglie/?hl=it'),
('154', 'PASTICCERIA LUFI', 'Alimentari', 'Pasticceria Siciliana', '29', 'pasticcerialufi.wixsite.com/foto'),
('158', 'GELATIX', 'Alimentari', 'La produzione, il commercio, al minuto e all\'ingrosso, in forma fissa e ambulante, di prodotti alimentari e dolciumi, in particolare gelati; l\'esercizio di laboratorio artigianale; la somministrazione di pasti e l\'esercizio pubblico di bar e pasticceria.', '29', 'www.coobiz.it/azienda/vigevano-produzione-commercio/co1327570'),
('164', 'BAGIGIO STORE', 'Negozio vintage', NULL, '21', 'https://www.vinted.it/member/56873065-lauraalbiero\r\n'),
('170', 'GIOCATTOPOLI.COM', 'Giocattoli', 'Nasce dalla passione per i giocattoli. Nel 2015 abbiamo aperto il nostro negozio fisico a Roma, dove potete trovare migliaia di articoli come da nostro catalogo.', '21', 'https://www.giocattopoli.com/'),
('181', 'HUNTER GAMES', 'Fumetti', 'Carte, Playmat, Accessori da gioco, Action Figures, Funko Pop, Giochi da tavolo, Fumetti e tanto altro.', '21', 'https://www.facebook.com/Hunter.GamesCp.Official/'),
('189', 'FANNIE', 'Vestiti', 'Lo Shop di Fanny nasce dalla voglia di interagire con i clienti del mondo virtuale.\r\nLa mia azienda propone una vasta gamma di articoli , ma  sopratutto propongo abbigliamento per le donne che come hanno le curve, ', '21', 'https://www.loshopdifanny.com/'),
('191', 'FELES CREATIONS', 'Accessori', 'Tra videogiochi, fumetti e gatti, creo a mano accessori per te e per la tua casa a tema nerd e kawaii', '21', 'https://felescreations.com/'),
('197', 'ESCALIBUR', 'Giochi da tavolo', 'Excalibur Games apre nel 2013, nascendo dalla passione per il mondo dei giochi da tavolo e dall’esperienza decennale nel mondo di Magic the Gathering. Siamo diventati uno dei più grandi negozi della Lombardia specializzati, che tratta GIOCHI DA TAVOLO per', '21', 'https://www.excaliburgames.eu/'),
('200', 'DREAMONLINE', 'RIPARAZIONI SMARTPHONE', 'Dreamonline di Giacomo Oliveri ® è un’azienda specializzata nella riparazione di smartphones e tablet ed in particolare di iPhone e iPad.', '21', 'https://www.iphonerottomilano.it/'),
('207', 'EL MUNEQUERO TENERIFE', 'Pupazzi', 'L\'impresa nasce a Tenerife, da un\'idea del proprietario, che unisce la passione per la modellazione a quella del comics. Il materiale usato è l\'argilla polimerica, i colori brillanti si sposano perfettamente con la tipologia del nostro prodotto. Sono pupa', '21', 'https://www.facebook.com/artisaniatenerife/?locale=it_IT'),
('218', 'DYNIT', 'Anime e Manga', 'DYNIT è una full service film company specializzata nell’animazione giapponese, cartoni animati e live action movies, le cui attività spaziano nella distribuzione, edizione, licensing, publishing.', '21', 'https://www.dynit.it/'),
('232', 'BACK TO THE SNES', 'Videogiochi', 'Commerciante di retrogaming e videgiochi\r\nAppassionato di Game Boy\r\nModder e restauratore', '21', 'https://www.facebook.com/backtothesnes/?locale=it_IT'),
('241', 'ALTALENA SULLA LUNA ', 'Accessori', '', '21', 'https://www.instagram.com/altalenasullaluna/?hl=it'),
('256', 'AMERICANCRUNCH', 'Food', 'American Crunch ti offre un vastissimo assortimento di prodotti 100% americani. Bibite ed energy drink, cibi dolci o salati, salse, gadget e accessori e tante box per fare davvero il pieno dei tuoi snack preferiti.', '21', 'https://www.americancrunch.it/'),
('258', 'FILMALIBRI', ' segnalibri', 'Diffondo la magia del cinema e sblocco ricordi attraverso le mie realizzazioni in vera pellicola cinematografica.', '21', 'https://filmalibri.it/'),
('259', 'BABOU DI BARBARA D’ALESSANDRO ', 'Accessori', 'Ecommerce dal 2007 - Content Creator dal 2018\r\nHo iniziato a lavorare nel digitale per gestire il mio tempo e poter vedere crescere i miei figli. Ho visto clienti trasformarsi in collaboratrici e hobby trasformarsi in lavori.\r\n\r\nPoi Youtube mi ha stravolt', '21', 'https://barbaradalessandro.com/'),
('264', 'ALCHEMIAN – IN NERD WE TRUST ', 'Abbigliamento', 'Alchemian è una attività made in Italy incentrata principalmente su stampa e ricamo di abbigliamento e svariati accessori pensati e ispirati alla cultura nerd a 360°', '21', 'https://www.alchemianshop.it/'),
('302', 'ACTIONFIGURESREALM', 'Action figure', 'Gruppo di tre amici uniti dalla passione comune per il collezionismo legato ad anime, manga, comics, movie e videogames.', '21', 'https://www.actionfiguresrealm.com/'),
('309B', 'FANDOMPIXS', 'Stampe personalizzate', NULL, '21', 'https://fandompixs.com/');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `fiere`
--
ALTER TABLE `fiere`
  ADD PRIMARY KEY (`name_conference`),
  ADD KEY `name_conference` (`name_conference`);

--
-- Indici per le tabelle `pavilion`
--
ALTER TABLE `pavilion`
  ADD PRIMARY KEY (`n_pavilion`),
  ADD KEY `name_conference` (`name_conference`);

--
-- Indici per le tabelle `stand`
--
ALTER TABLE `stand`
  ADD PRIMARY KEY (`n_stand`),
  ADD KEY `n_pavilion` (`n_pavilion`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `pavilion`
--
ALTER TABLE `pavilion`
  ADD CONSTRAINT `pavilion_ibfk_1` FOREIGN KEY (`name_conference`) REFERENCES `fiere` (`name_conference`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limiti per la tabella `stand`
--
ALTER TABLE `stand`
  ADD CONSTRAINT `stand_ibfk_1` FOREIGN KEY (`n_pavilion`) REFERENCES `pavilion` (`n_pavilion`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
