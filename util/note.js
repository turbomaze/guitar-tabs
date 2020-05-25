import { Serializable } from './helpers';
import { fingers, guitarStrings } from './enums';

export class Note extends Serializable {
  static nullFret = '';
  static nullNoteRepresentation = '_';

  toFretString() {
    throw new Error('unimplemented');
  }

  static makeNull() {
    return new NullNote();
  }

  static fromFretString(fretString, guitarString) {
    if (fretString === Note.nullFret) {
      return Note.makeNull();
    }

    return new PlayedNote(parseInt(fretString), fingers.unspecified, guitarString);
  }

  static fromString(string) {
    if (string === Note.nullNoteRepresentation) {
      return Note.makeNull();
    }

    const parts = string.split(':');
    return new PlayedNote(parseInt(parts[0]), parts[1], parts[2]);
  }

  static fromJson(json) {
    if (
      [
        json.fret,
        json.finger,
        json.guitarString
      ].every(a => a === null)
    ) {
      return Note.makeNull();
    }

    return PlayedNote.fromJson(json);
  }
}

class NullNote extends Note {
  toFretString() {
    return Note.nullFret;
  }

  toString() {
    return Note.nullNoteRepresentation;
  }

  toJson() {
    return { fret: null, finger: null, guitarString: null };
  }
}

class PlayedNote extends Note {
  /**
   * @param {number} fret
   * @param {Finger} finger
   * @param {GuitarString} guitarString
   */
  constructor(fret, finger, guitarString) {
    super();

    if (!Object.values(fingers).includes(finger)) {
      throw new Error(`Unexpected finger: "${finger}"`);
    }

    if (!Object.values(guitarStrings).includes(guitarString)) {
      throw new Error(`Unexpected finger: "${finger}"`);
    }

    this.fret = fret;
    this.finger = finger;
    this.guitarString = guitarString;
  }

  toFretString() {
    return this.fret.toString();
  }

  toString() {
    return `${this.fret}:${this.finger}:${this.guitarString}`;
  }

  toJson() {
    return {
      fret: this.fret,
      finger: this.finger,
      guitarString: this.guitarString,
    };
  }

  static fromJson(json) {
    return new PlayedNote(parseInt(json.fret), json.finger, json.guitarString);
  }
}
