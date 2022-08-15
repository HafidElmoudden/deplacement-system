/*
  Warnings:

  - The primary key for the `vehicule_personnel` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `employes` DROP FOREIGN KEY `employes_veh_matricule_fkey`;

-- AlterTable
ALTER TABLE `employes` MODIFY `veh_matricule` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `vehicule_personnel` DROP PRIMARY KEY,
    MODIFY `veh_matricule` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`veh_matricule`);

-- AddForeignKey
ALTER TABLE `employes` ADD CONSTRAINT `employes_veh_matricule_fkey` FOREIGN KEY (`veh_matricule`) REFERENCES `vehicule_personnel`(`veh_matricule`) ON DELETE RESTRICT ON UPDATE CASCADE;
