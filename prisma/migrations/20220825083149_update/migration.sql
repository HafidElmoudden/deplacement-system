/*
  Warnings:

  - The primary key for the `employes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `matricule` on the `employes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `matricule` on the `ordre_de_mission` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `ordre_de_mission` DROP FOREIGN KEY `ordre_de_mission_matricule_fkey`;

-- AlterTable
ALTER TABLE `employes` DROP PRIMARY KEY,
    MODIFY `matricule` INTEGER NOT NULL,
    ADD PRIMARY KEY (`matricule`);

-- AlterTable
ALTER TABLE `ordre_de_mission` MODIFY `matricule` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ordre_de_mission` ADD CONSTRAINT `ordre_de_mission_matricule_fkey` FOREIGN KEY (`matricule`) REFERENCES `employes`(`matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;
