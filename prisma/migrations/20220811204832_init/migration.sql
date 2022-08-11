-- DropForeignKey
ALTER TABLE `employes` DROP FOREIGN KEY `employes_veh_matricule_fkey`;

-- DropIndex
DROP INDEX `vehicule_personnel_puiss_code_key` ON `vehicule_personnel`;

-- CreateTable
CREATE TABLE `_employesTovehicule_personnel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_employesTovehicule_personnel_AB_unique`(`A`, `B`),
    INDEX `_employesTovehicule_personnel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_employesTovehicule_personnel` ADD CONSTRAINT `_employesTovehicule_personnel_A_fkey` FOREIGN KEY (`A`) REFERENCES `employes`(`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_employesTovehicule_personnel` ADD CONSTRAINT `_employesTovehicule_personnel_B_fkey` FOREIGN KEY (`B`) REFERENCES `vehicule_personnel`(`veh_matricule`) ON DELETE CASCADE ON UPDATE CASCADE;
