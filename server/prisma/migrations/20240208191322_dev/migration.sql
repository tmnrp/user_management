-- AlterTable
ALTER TABLE "change_logs" ADD COLUMN     "updated_by_user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "change_logs" ADD CONSTRAINT "change_logs_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
