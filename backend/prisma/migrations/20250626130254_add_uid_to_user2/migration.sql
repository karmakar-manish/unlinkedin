/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `UserSchema` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_uid_key" ON "UserSchema"("uid");
