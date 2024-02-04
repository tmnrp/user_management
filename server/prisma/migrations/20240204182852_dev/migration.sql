-- AlterTable
ALTER TABLE "User" ADD COLUMN     "changeLogId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_changeLogId_fkey" FOREIGN KEY ("changeLogId") REFERENCES "change_logs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
