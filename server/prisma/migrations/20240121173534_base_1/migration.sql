-- CreateTable
CREATE TABLE "Right" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "roleId" INTEGER,

    CONSTRAINT "Right_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Right_name_key" ON "Right"("name");

-- AddForeignKey
ALTER TABLE "Right" ADD CONSTRAINT "Right_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
