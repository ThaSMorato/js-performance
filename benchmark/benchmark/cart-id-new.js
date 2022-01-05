import { randomUUID as uuid } from "crypto";

export class CartIdNew {
  constructor() {
    this.id = uuid();
  }
}
