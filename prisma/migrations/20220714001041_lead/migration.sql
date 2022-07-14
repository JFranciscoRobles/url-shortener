/*
  Warnings:

  - You are about to drop the column `countClicks` on the `Lead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Lead` DROP COLUMN `countClicks`,
    ADD COLUMN `browserName` TEXT NULL,
    ADD COLUMN `city` TEXT NULL,
    ADD COLUMN `country` TEXT NULL,
    ADD COLUMN `deviceType` TEXT NULL;
