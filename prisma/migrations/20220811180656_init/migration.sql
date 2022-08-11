-- AlterTable
ALTER TABLE `ordre_de_mission` MODIFY `date_depart` VARCHAR(10) NOT NULL,
    MODIFY `heure_depart` VARCHAR(8) NOT NULL,
    MODIFY `date_retour` VARCHAR(10) NOT NULL,
    MODIFY `heure_retour` VARCHAR(8) NOT NULL;
