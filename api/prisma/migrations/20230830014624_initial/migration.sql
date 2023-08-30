-- CreateTable
CREATE TABLE "Avocado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "imageUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weight" INTEGER,
    "size" TEXT,
    "avocadoId" INTEGER NOT NULL,
    CONSTRAINT "Attributes_avocadoId_fkey" FOREIGN KEY ("avocadoId") REFERENCES "Avocado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_avocadoId_key" ON "Attributes"("avocadoId");
