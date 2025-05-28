-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateTable
CREATE TABLE "connectionRequest" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "connectionRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "connectionRequest" ADD CONSTRAINT "connectionRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectionRequest" ADD CONSTRAINT "connectionRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
