import { v4 as uuidv4 } from "uuid";

export interface NotesInterface {
  id: string;
  title: string;
  description: string;
}

export class NotesModel {
  private readonly id!: string;
  private readonly title!: string;
  private readonly description!: string;

  constructor(title: string, description: string) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
  }

  public getNotes(): NotesInterface {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
    };
  }
}
