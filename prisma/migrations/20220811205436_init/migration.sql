-- DropForeignKey
ALTER TABLE `employes` DROP FOREIGN KEY `employes_banq_code_fkey`;

-- DropForeignKey
ALTER TABLE `employes` DROP FOREIGN KEY `employes_cod_gra_fkey`;

-- DropForeignKey
ALTER TABLE `ordre_de_mission` DROP FOREIGN KEY `ordre_de_mission_des_code_fkey`;

-- DropForeignKey
ALTER TABLE `ordre_de_mission` DROP FOREIGN KEY `ordre_de_mission_matricule_fkey`;

-- DropForeignKey
ALTER TABLE `ordre_de_mission` DROP FOREIGN KEY `ordre_de_mission_mt_code_fkey`;

-- DropIndex
DROP INDEX `employes_veh_matricule_key` ON `employes`;

-- CreateTable
CREATE TABLE `_moyens_de_transportToordre_de_mission` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_moyens_de_transportToordre_de_mission_AB_unique`(`A`, `B`),
    INDEX `_moyens_de_transportToordre_de_mission_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_destinationsToordre_de_mission` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_destinationsToordre_de_mission_AB_unique`(`A`, `B`),
    INDEX `_destinationsToordre_de_mission_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_employesTogrades` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_employesTogrades_AB_unique`(`A`, `B`),
    INDEX `_employesTogrades_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_employesToordre_de_mission` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_employesToordre_de_mission_AB_unique`(`A`, `B`),
    INDEX `_employesToordre_de_mission_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_banquesToemployes` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_banquesToemployes_AB_unique`(`A`, `B`),
    INDEX `_banquesToemployes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_moyens_de_transportToordre_de_mission` ADD CONSTRAINT `_moyens_de_transportToordre_de_mission_A_fkey` FOREIGN KEY (`A`) REFERENCES `moyens_de_transport`(`mt_code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_moyens_de_transportToordre_de_mission` ADD CONSTRAINT `_moyens_de_transportToordre_de_mission_B_fkey` FOREIGN KEY (`B`) REFERENCES `ordre_de_mission`(`num_ordre_miss`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_destinationsToordre_de_mission` ADD CONSTRAINT `_destinationsToordre_de_mission_A_fkey` FOREIGN KEY (`A`) REFERENCES `destinations`(`des_code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_destinationsToordre_de_mission` ADD CONSTRAINT `_destinationsToordre_de_mission_B_fkey` FOREIGN KEY (`B`) REFERENCES `ordre_de_mission`(`num_ordre_miss`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_employesTogrades` ADD CONSTRAINT `_employesTogrades_A_fkey` FOREIGN KEY (`A`) REFERENCES `employes`(`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_employesTogrades` ADD CONSTRAINT `_employesTogrades_B_fkey` FOREIGN KEY (`B`) REFERENCES `grades`(`cod_gra`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_employesToordre_de_mission` ADD CONSTRAINT `_employesToordre_de_mission_A_fkey` FOREIGN KEY (`A`) REFERENCES `employes`(`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_employesToordre_de_mission` ADD CONSTRAINT `_employesToordre_de_mission_B_fkey` FOREIGN KEY (`B`) REFERENCES `ordre_de_mission`(`num_ordre_miss`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_banquesToemployes` ADD CONSTRAINT `_banquesToemployes_A_fkey` FOREIGN KEY (`A`) REFERENCES `banques`(`banq_code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_banquesToemployes` ADD CONSTRAINT `_banquesToemployes_B_fkey` FOREIGN KEY (`B`) REFERENCES `employes`(`matricule`) ON DELETE CASCADE ON UPDATE CASCADE;
