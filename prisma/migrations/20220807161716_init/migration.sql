/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `puissances_fiscales` (
    `puiss_code` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,
    `taux` DOUBLE NOT NULL,

    PRIMARY KEY (`puiss_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grades` (
    `cod_gra` INTEGER NOT NULL AUTO_INCREMENT,
    `int_gra` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`cod_gra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `frais_standards` (
    `categ` INTEGER NOT NULL AUTO_INCREMENT,
    `dejeun` INTEGER NOT NULL,
    `diner` INTEGER NOT NULL,
    `decouch` INTEGER NOT NULL,

    PRIMARY KEY (`categ`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moyens_de_transport` (
    `mt_code` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`mt_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `destinations` (
    `des_code` INTEGER NOT NULL AUTO_INCREMENT,
    `nom_ville` VARCHAR(50) NOT NULL,
    `distance_aller_retour` INTEGER NOT NULL,

    PRIMARY KEY (`des_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicule_personnel` (
    `veh_matricule` INTEGER NOT NULL AUTO_INCREMENT,
    `veh_marque` VARCHAR(50) NOT NULL,
    `puiss_code` INTEGER NOT NULL,

    UNIQUE INDEX `vehicule_personnel_puiss_code_key`(`puiss_code`),
    PRIMARY KEY (`veh_matricule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employes` (
    `matricule` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `prenom` VARCHAR(50) NOT NULL,
    `cod_gra` INTEGER NOT NULL,
    `banq_code` INTEGER NOT NULL,
    `num_virement_banq` VARCHAR(24) NOT NULL,
    `veh_matricule` INTEGER NOT NULL,

    UNIQUE INDEX `employes_cod_gra_key`(`cod_gra`),
    UNIQUE INDEX `employes_banq_code_key`(`banq_code`),
    UNIQUE INDEX `employes_veh_matricule_key`(`veh_matricule`),
    PRIMARY KEY (`matricule`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banques` (
    `banq_code` INTEGER NOT NULL AUTO_INCREMENT,
    `banq_nom` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`banq_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ordre_de_mission` (
    `num_ordre_miss` INTEGER NOT NULL AUTO_INCREMENT,
    `annee` INTEGER NOT NULL,
    `matricule` INTEGER NOT NULL,
    `des_code` INTEGER NOT NULL,
    `date_depart` DATETIME(3) NOT NULL,
    `heure_depart` TIME NOT NULL,
    `date_retour` DATETIME(3) NOT NULL,
    `heure_retour` TIME NOT NULL,
    `mt_code` INTEGER NOT NULL,
    `motif` VARCHAR(50) NOT NULL,
    `frais_divers` INTEGER NOT NULL,
    `nbr_jour` INTEGER NOT NULL,

    UNIQUE INDEX `ordre_de_mission_matricule_key`(`matricule`),
    UNIQUE INDEX `ordre_de_mission_des_code_key`(`des_code`),
    UNIQUE INDEX `ordre_de_mission_mt_code_key`(`mt_code`),
    PRIMARY KEY (`num_ordre_miss`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vehicule_personnel` ADD CONSTRAINT `vehicule_personnel_puiss_code_fkey` FOREIGN KEY (`puiss_code`) REFERENCES `puissances_fiscales`(`puiss_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_cod_gra_fkey` FOREIGN KEY (`cod_gra`) REFERENCES `grades`(`cod_gra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_banq_code_fkey` FOREIGN KEY (`banq_code`) REFERENCES `banques`(`banq_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_veh_matricule_fkey` FOREIGN KEY (`veh_matricule`) REFERENCES `vehicule_personnel`(`veh_matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ordre_de_mission` ADD CONSTRAINT `ordre_de_mission_matricule_fkey` FOREIGN KEY (`matricule`) REFERENCES `employes`(`matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ordre_de_mission` ADD CONSTRAINT `ordre_de_mission_des_code_fkey` FOREIGN KEY (`des_code`) REFERENCES `destinations`(`des_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ordre_de_mission` ADD CONSTRAINT `ordre_de_mission_mt_code_fkey` FOREIGN KEY (`mt_code`) REFERENCES `moyens_de_transport`(`mt_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
