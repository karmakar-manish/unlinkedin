-- CreateTable
CREATE TABLE "userSchema" (
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

    CONSTRAINT "userSchema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userSchema_username_key" ON "userSchema"("username");

-- CreateIndex
CREATE UNIQUE INDEX "userSchema_email_key" ON "userSchema"("email");
