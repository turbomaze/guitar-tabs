import { Serializable } from './helpers';
import { accents, fingers, guitarStrings } from './enums';

export class Note extends Serializable {
  static nullFret = '';
  static nullNoteRepresentation = '_';

  getAccent() {
    throw new Error('unimplemented');
  }

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

    return new PlayedNote(fretString, fingers.unspecified, guitarString, accents.none);
  }

  static fromString(string) {
    if (string === Note.nullNoteRepresentation) {
      return Note.makeNull();
    }

    const parts = string.split(':');
    return new PlayedNote(parts[0], parts[1], parts[2], parts[3]);
  }

  static fromJson(json) {
    if (
      [
        json.fret,
        json.finger,
        json.guitarString,
        json.accent,
      ].every(a => a === null)
    ) {
      return Note.makeNull();
    }

    return PlayedNote.fromJson(json);
  }
}

class NullNote extends Note {
  getAccent() {
    return accents.none;
  }

  toFretString() {
    return Note.nullFret;
  }

  toString() {
    return Note.nullNoteRepresentation;
  }

  toJson() {
    return { fret: null, finger: null, guitarString: null, accent: null };
  }
}

class PlayedNote extends Note {
  /**
   * @param {number} fret
   * @param {Finger} finger
   * @param {GuitarString} guitarString
   * @param {Accent} accent
   */
  constructor(fret, finger, guitarString, accent) {
    super();

    if (!Object.values(fingers).includes(finger)) {
      throw new Error(`Unexpected finger: "${finger}"`);
    }

    if (!Object.values(guitarStrings).includes(guitarString)) {
      throw new Error(`Unexpected finger: "${finger}"`);
    }

    if (!Object.values(accents).includes(accent)) {
      throw new Error(`Unexpected accent: "${accent}"`);
    }

    this.fret = fret;
    this.finger = finger;
    this.guitarString = guitarString;
    this.accent = accent;
  }

  getAccent() {
    return this.accent;
  }

  toFretString() {
    return this.fret.toString();
  }

  toString() {
    return `${this.fret}:${this.finger}:${this.guitarString}:${this.accent}`;
  }

  toJson() {
    return {
      fret: this.fret,
      finger: this.finger,
      guitarString: this.guitarString,
    };
  }

  static fromJson(json) {
    return new PlayedNote(json.fret, json.finger, json.guitarString, json.accent);
  }
}
