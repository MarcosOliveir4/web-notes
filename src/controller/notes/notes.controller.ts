import { NotesInterface, NotesModel } from "../../model";

const localStorageKey = "web-notes";

export class NotesController {
  public createNotes(title: string, description: string) {
    const notes = new NotesModel(title, description).getNotes();
    this.saveNotes(notes);
  }

  public getNotes(): Array<NotesInterface> {
    const notes = localStorage.getItem(localStorageKey);
    return notes ? JSON.parse(notes) : [];
  }

  public deleteNotes(id: string): void {
    const currentNotes = this.getNotes();
    const newNotes = currentNotes.filter((note) => note.id !== id);

    localStorage.setItem(localStorageKey, JSON.stringify(newNotes));
  }

  private saveNotes(notes: NotesInterface): void {
    const currentNotes = this.getNotes();
    const newNotes = currentNotes.concat(notes);

    localStorage.setItem(localStorageKey, JSON.stringify(newNotes));
  }
}
