/*
  Warnings:

  - You are about to drop the column `url` on the `Link` table. All the data in the column will be lost.
  - Added the required column `urlPath` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urlRedirect` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Link` DROP COLUMN `url`,
    ADD COLUMN `urlPath` TEXT NOT NULL,
    ADD COLUMN `urlRedirect` TEXT NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NULL;
