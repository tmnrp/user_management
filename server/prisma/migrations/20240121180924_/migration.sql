/*
  Warnings:

  - You are about to drop the column `roleId` on the `Right` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Right" DROP CONSTRAINT "Right_roleId_fkey";

-- AlterTable
ALTER TABLE "Right" DROP COLUMN "roleId";

-- CreateTable
CREATE TABLE "_RightToRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RightToRole_AB_unique" ON "_RightToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_RightToRole_B_index" ON "_RightToRole"("B");

-- AddForeignKey
ALTER TABLE "_RightToRole" ADD CONSTRAINT "_RightToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Right"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RightToRole" ADD CONSTRAINT "_RightToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
