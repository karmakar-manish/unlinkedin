-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('like', 'comment', 'connectionAccepted');

-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- CreateTable
CREATE TABLE "UserSchema" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL DEFAULT '',
    "bannerImg" TEXT NOT NULL DEFAULT '',
    "headline" TEXT NOT NULL DEFAULT 'Linkedin User',
    "location" TEXT NOT NULL DEFAULT 'Earth',
    "about" TEXT NOT NULL DEFAULT '',
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "UserSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "school" TEXT NOT NULL,
    "fieldOfStudy" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostSchema" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostLikes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostLikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" SERIAL NOT NULL,
    "recipientId" INTEGER NOT NULL,
    "type" "NotificationType" NOT NULL,
    "relatedUserId" INTEGER,
    "relatedPostId" INTEGER,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connectionRequest" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "connectionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserConnections" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserConnections_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_username_key" ON "UserSchema"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserSchema_email_key" ON "UserSchema"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PostLikes_userId_postId_key" ON "PostLikes"("userId", "postId");

-- CreateIndex
CREATE INDEX "_UserConnections_B_index" ON "_UserConnections"("B");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostSchema" ADD CONSTRAINT "PostSchema_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLikes" ADD CONSTRAINT "PostLikes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostLikes" ADD CONSTRAINT "PostLikes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_relatedUserId_fkey" FOREIGN KEY ("relatedUserId") REFERENCES "UserSchema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_relatedPostId_fkey" FOREIGN KEY ("relatedPostId") REFERENCES "PostSchema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectionRequest" ADD CONSTRAINT "connectionRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connectionRequest" ADD CONSTRAINT "connectionRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "UserSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserConnections" ADD CONSTRAINT "_UserConnections_A_fkey" FOREIGN KEY ("A") REFERENCES "UserSchema"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserConnections" ADD CONSTRAINT "_UserConnections_B_fkey" FOREIGN KEY ("B") REFERENCES "UserSchema"("id") ON DELETE CASCADE ON UPDATE CASCADE;
