import { describe, expect, it } from "vitest";

import { NotesModel } from "./notes.model";

const defaultNotes = {
  title: "title",
  description: "description",
};
const sut = () => new NotesModel(defaultNotes.title, defaultNotes.description);

describe("NotesModel", () => {
  it("should create a new note", () => {
    const notes = sut();
    expect(notes).toBeTruthy();
  });
  it("should return a note", () => {
    const notes = sut();
    const result = notes.getNotes();
    expect(result).toEqual({
      id: expect.any(String),
      title: defaultNotes.title,
      description: defaultNotes.description,
    });
  });
});
