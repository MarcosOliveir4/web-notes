import { describe, expect, it, beforeEach } from "vitest";

import { NotesController } from "./notes.controller";

const defaultNotes = {
  title: "title",
  description: "description",
};
const sut = () => new NotesController();

describe("NotesController", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should create a new note", () => {
    const notesController = sut();
    notesController.createNotes(defaultNotes.title, defaultNotes.description);
    expect(notesController.getNotes()).toBeTruthy();
  });
  it("should return a note", () => {
    const notesController = sut();
    notesController.createNotes(defaultNotes.title, defaultNotes.description);
    const notes = notesController.getNotes();
    expect(notes[0]).toEqual({
      id: expect.any(String),
      title: defaultNotes.title,
      description: defaultNotes.description,
    });
  });
  it("should delete a note", () => {
    const notesController = sut();
    notesController.createNotes(defaultNotes.title, defaultNotes.description);
    const notes = notesController.getNotes();
    notesController.deleteNotes(notes[0].id);
    expect(notesController.getNotes()).toEqual([]);
  });
});
