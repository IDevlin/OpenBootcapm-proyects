import { STATE } from './State.enum';

export class Contact {
  name = '';
  lastName = '';
  email = false;
  conected = STATE.OFFLINE;
  constructor(name, lastName, email, conected) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.conected = conected;
  }
}
