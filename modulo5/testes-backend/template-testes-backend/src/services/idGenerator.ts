import { v4 as uuidv4 } from 'uuid';

export class IdGenerator {
  public generate(): string {
    return uuidv4();
  }
}

export default new IdGenerator()