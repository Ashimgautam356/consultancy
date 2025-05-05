-- CreateEnum
CREATE TYPE "AppStatus" AS ENUM ('Application_Submitted', 'Documents_Verified', 'Offer_Letter', 'Visa', 'Start');

-- CreateTable
CREATE TABLE "ApplicationStatus" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "AppStatus" NOT NULL DEFAULT 'Start',

    CONSTRAINT "ApplicationStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ApplicationStatus" ADD CONSTRAINT "ApplicationStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
