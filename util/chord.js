import { Serializable } from './helpers';
import { Note } from './note';
import { guitarStrings, numberOfStrings } from './enums';

export class Chord extends Serializable {
  static nullChordRepresentation = '______';

  getNoteAt(guitarString) {
    throw new Error('unimplemented');
  }

  static rest() {
    return new NullChord();
  }

  static fromString(string) {
    if (string === Chord.nullChordRepresentation) {
      return Chord.rest();
    }

    const frets = string.split('').map(fretDisplayString => {
      return fretDisplayString === '_' ? Note.nullFret : fretDisplayString;
    });
    return new PlayedChord([
      // note: this may seem repetitive, but the association between the supplied frets and
      // the names of the guitar strings is not an essential property
      Note.fromFretString(frets[0], guitarStrings.sixth),
      Note.fromFretString(frets[1], guitarStrings.fifth),
      Note.fromFretString(frets[2], guitarStrings.fourth),
      Note.fromFretString(frets[3], guitarStrings.third),
      Note.fromFretString(frets[4], guitarStrings.second),
      Note.fromFretString(frets[5], guitarStrings.first),
    ]);
  }

  static fromJson(json) {
    if (json.notes === null) {
      return Chord.rest();
    }

    const notes = json.notes.map(jsonNote => Note.fromJson(jsonNote));
    return new PlayedChord(notes);
  }
}

class NullChord extends Chord {
  getNoteAt(guitarString) {
    return Note.makeNull();
  }

  toString() {
    return Chord.nullChordRepresentation;
  }

  toJson() {
    return { notes: null };
  }
}

class PlayedChord extends Chord {
  /**
   * @param {Note[]} notes -- notes in order from low string to high string
   */
  constructor(notes) {
    super();

    this.notes = notes;
  }

  getNoteAt(guitarString) {
    const note = this.notes.find(note => note.getGuitarString() === guitarString);
    if (note) {
      return note;
    }

    return Note.makeNull();
  }

  toString() {
    return [
      this.getNoteAt(guitarStrings.sixth).toFretString(),
      this.getNoteAt(guitarStrings.fifth).toFretString(),
      this.getNoteAt(guitarStrings.fourth).toFretString(),
      this.getNoteAt(guitarStrings.third).toFretString(),
      this.getNoteAt(guitarStrings.second).toFretString(),
      this.getNoteAt(guitarStrings.first).toFretString(),
    ].join();
  }

  toJson() {
    return {
      notes: this.notes.map(note => note.toJson())
    };
  }
}
