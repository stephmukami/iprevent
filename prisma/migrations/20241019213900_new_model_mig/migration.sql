-- CreateTable
CREATE TABLE "privacy_notes" (
    "note_id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "privacy_notes_pkey" PRIMARY KEY ("note_id")
);

-- AddForeignKey
ALTER TABLE "privacy_notes" ADD CONSTRAINT "privacy_notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
