/*
  Warnings:

  - The primary key for the `employes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `ordre_de_mission` DROP FOREIGN KEY `ordre_de_mission_matricule_fkey`;

-- AlterTable
ALTER TABLE `employes` DROP PRIMARY KEY,
    MODIFY `matricule` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`matricule`);

-- AlterTable
ALTER TABLE `ordre_de_mission` MODIFY `matricule` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `ordre_de_mission` ADD CONSTRAINT `ordre_de_mission_matricule_fkey` FOREIGN KEY (`matricule`) REFERENCES `employes`(`matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;
