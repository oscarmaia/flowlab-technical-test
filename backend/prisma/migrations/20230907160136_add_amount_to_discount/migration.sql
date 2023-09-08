/*
  Warnings:

  - Added the required column `amount` to the `Discount` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Discount" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "Discount_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Discount" ("id", "productId") SELECT "id", "productId" FROM "Discount";
DROP TABLE "Discount";
ALTER TABLE "new_Discount" RENAME TO "Discount";
CREATE UNIQUE INDEX "Discount_productId_key" ON "Discount"("productId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
