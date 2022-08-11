/*
  Warnings:

  - You are about to drop the `_banquestoemployes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_destinationstoordre_de_mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_employestogrades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_employestoordre_de_mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_employestovehicule_personnel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_moyens_de_transporttoordre_de_mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_puissances_fiscalestovehicule_personnel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_banquestoemployes` DROP FOREIGN KEY `_banquesToemployes_A_fkey`;

-- DropForeignKey
ALTER TABLE `_banquestoemployes` DROP FOREIGN KEY `_banquesToemployes_B_fkey`;

-- DropForeignKey
ALTER TABLE `_destinationstoordre_de_mission` DROP FOREIGN KEY `_destinationsToordre_de_mission_A_fkey`;

-- DropForeignKey
ALTER TABLE `_destinationstoordre_de_mission` DROP FOREIGN KEY `_destinationsToordre_de_mission_B_fkey`;

-- DropForeignKey
ALTER TABLE `_employestogrades` DROP FOREIGN KEY `_employesTogrades_A_fkey`;

-- DropForeignKey
ALTER TABLE `_employestogrades` DROP FOREIGN KEY `_employesTogrades_B_fkey`;

-- DropForeignKey
ALTER TABLE `_employestoordre_de_mission` DROP FOREIGN KEY `_employesToordre_de_mission_A_fkey`;

-- DropForeignKey
ALTER TABLE `_employestoordre_de_mission` DROP FOREIGN KEY `_employesToordre_de_mission_B_fkey`;

-- DropForeignKey
ALTER TABLE `_employestovehicule_personnel` DROP FOREIGN KEY `_employesTovehicule_personnel_A_fkey`;

-- DropForeignKey
ALTER TABLE `_employestovehicule_personnel` DROP FOREIGN KEY `_employesTovehicule_personnel_B_fkey`;

-- DropForeignKey
ALTER TABLE `_moyens_de_transporttoordre_de_mission` DROP FOREIGN KEY `_moyens_de_transportToordre_de_mission_A_fkey`;

-- DropForeignKey
ALTER TABLE `_moyens_de_transporttoordre_de_mission` DROP FOREIGN KEY `_moyens_de_transportToordre_de_mission_B_fkey`;

-- DropForeignKey
ALTER TABLE `_puissances_fiscalestovehicule_personnel` DROP FOREIGN KEY `_puissances_fiscalesTovehicule_personnel_A_fkey`;

-- DropForeignKey
ALTER TABLE `_puissances_fiscalestovehicule_personnel` DROP FOREIGN KEY `_puissances_fiscalesTovehicule_personnel_B_fkey`;

-- DropIndex
DROP INDEX `employes_banq_code_key` ON `employes`;

-- DropIndex
DROP INDEX `employes_cod_gra_key` ON `employes`;

-- DropIndex
DROP INDEX `ordre_de_mission_des_code_key` ON `ordre_de_mission`;

-- DropIndex
DROP INDEX `ordre_de_mission_matricule_key` ON `ordre_de_mission`;

-- DropIndex
DROP INDEX `ordre_de_mission_mt_code_key` ON `ordre_de_mission`;

-- DropTable
DROP TABLE `_banquestoemployes`;

-- DropTable
DROP TABLE `_destinationstoordre_de_mission`;

-- DropTable
DROP TABLE `_employestogrades`;

-- DropTable
DROP TABLE `_employestoordre_de_mission`;

-- DropTable
DROP TABLE `_employestovehicule_personnel`;

-- DropTable
DROP TABLE `_moyens_de_transporttoordre_de_mission`;

-- DropTable
DROP TABLE `_puissances_fiscalestovehicule_personnel`;
