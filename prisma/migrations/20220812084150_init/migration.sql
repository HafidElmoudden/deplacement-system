/*
  Warnings:

  - A unique constraint covering the columns `[veh_matricule]` on the table `employes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matricule]` on the table `ordre_de_mission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `employes_veh_matricule_key` ON `employes`(`veh_matricule`);

-- CreateIndex
CREATE UNIQUE INDEX `ordre_de_mission_matricule_key` ON `ordre_de_mission`(`matricule`);

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
