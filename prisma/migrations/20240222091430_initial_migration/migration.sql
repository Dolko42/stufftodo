-- AlterTable
ALTER TABLE "Stuff" ADD COLUMN     "deadline" TIMESTAMP(3),
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Stufflist" ALTER COLUMN "icon" DROP NOT NULL;
