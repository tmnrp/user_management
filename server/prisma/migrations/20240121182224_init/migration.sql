/*
  Warnings:

  - You are about to drop the `Right` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RightToRole" DROP CONSTRAINT "_RightToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_RightToRole" DROP CONSTRAINT "_RightToRole_B_fkey";

-- DropTable
DROP TABLE "Right";

-- DropTable
DROP TABLE "Role";

-- CreateTable
CREATE TABLE "rights" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "rights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rights_name_key" ON "rights"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- AddForeignKey
ALTER TABLE "_RightToRole" ADD CONSTRAINT "_RightToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "rights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RightToRole" ADD CONSTRAINT "_RightToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
