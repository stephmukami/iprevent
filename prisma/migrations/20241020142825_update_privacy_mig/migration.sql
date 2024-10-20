/*
  Warnings:

  - You are about to drop the column `user_id` on the `privacy_notes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "privacy_notes" DROP CONSTRAINT "privacy_notes_user_id_fkey";

-- AlterTable
ALTER TABLE "privacy_notes" DROP COLUMN "user_id";
