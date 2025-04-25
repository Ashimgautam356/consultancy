/*
  Warnings:

  - The values [DOC_MANAGER,INSTRUCTOR,RECEPTIONIST] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('STUDENT', 'ADMIN', 'EMPLOYEE');
ALTER TABLE "Admin" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Employee" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Student" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Admin" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "Employee" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "Student" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "Admin" ALTER COLUMN "role" SET DEFAULT 'ADMIN';
ALTER TABLE "Employee" ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE';
ALTER TABLE "Student" ALTER COLUMN "role" SET DEFAULT 'STUDENT';
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'STUDENT';
COMMIT;

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE';
