-- CreateTable
CREATE TABLE "AppliedIn" (
    "studentId" INTEGER NOT NULL,
    "uniId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "AppliedIn_pkey" PRIMARY KEY ("studentId","uniId","countryId")
);

-- AddForeignKey
ALTER TABLE "AppliedIn" ADD CONSTRAINT "AppliedIn_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedIn" ADD CONSTRAINT "AppliedIn_uniId_fkey" FOREIGN KEY ("uniId") REFERENCES "Universities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppliedIn" ADD CONSTRAINT "AppliedIn_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
