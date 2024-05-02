-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "project" TEXT NOT NULL,
    CONSTRAINT "Task_project_fkey" FOREIGN KEY ("project") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Task_title_key" ON "Task"("title");
