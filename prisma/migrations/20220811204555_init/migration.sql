-- DropForeignKey
ALTER TABLE `vehicule_personnel` DROP FOREIGN KEY `vehicule_personnel_puiss_code_fkey`;

-- CreateTable
CREATE TABLE `_puissances_fiscalesTovehicule_personnel` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_puissances_fiscalesTovehicule_personnel_AB_unique`(`A`, `B`),
    INDEX `_puissances_fiscalesTovehicule_personnel_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_puissances_fiscalesTovehicule_personnel` ADD CONSTRAINT `_puissances_fiscalesTovehicule_personnel_A_fkey` FOREIGN KEY (`A`) REFERENCES `puissances_fiscales`(`puiss_code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_puissances_fiscalesTovehicule_personnel` ADD CONSTRAINT `_puissances_fiscalesTovehicule_personnel_B_fkey` FOREIGN KEY (`B`) REFERENCES `vehicule_personnel`(`veh_matricule`) ON DELETE CASCADE ON UPDATE CASCADE;
