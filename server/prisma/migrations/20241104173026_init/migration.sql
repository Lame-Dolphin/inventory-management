/*
  Warnings:

  - You are about to drop the column `totalExpense` on the `ExpenseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `totalPurchase` on the `PurchaseSummary` table. All the data in the column will be lost.
  - Added the required column `totalExpenses` to the `ExpenseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPurchased` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseSummary" DROP COLUMN "totalExpense",
ADD COLUMN     "totalExpenses" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "totalPurchase",
ADD COLUMN     "totalPurchased" DOUBLE PRECISION NOT NULL;
