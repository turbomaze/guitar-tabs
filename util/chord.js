import { Serializable } from './helpers';
import { Note } from './note';
import { guitarStrings, numberOfStrings } from './enums';

export class Chord extends Serializable {
  static nullChordRepresentation = '______';

  getNoteAt(guitarString) {
    throw new Error('unimplemented');
  }

  static fromString(string) {
    if (string === Chord.nullChordRepresentation) {
      return new NullChord();
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
      return new NullChord;
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

    if (notes.length !== numberOfStrings) {
      throw new Error(`A chord must specify ${numberOfStrings} notes`);
    }

    // guitar tends to index strings from high to low, which doesn't make sense
    // to me, hence this reverse mapping
    this.notes = {
      [guitarStrings.sixth]: notes[0],
      [guitarStrings.fifth]: notes[1],
      [guitarStrings.fourth]: notes[2],
      [guitarStrings.third]: notes[3],
      [guitarStrings.second]: notes[4],
      [guitarStrings.first]: notes[5],
    };
  }

  getNoteAt(guitarString) {
    if (!(guitarString in this.notes)) {
      throw new Error(`Unexpected guitar string: "${guitarString}"`);
    }

    return this.notes[guitarString];
  }

  toString() {
    return [
      this.notes[guitarStrings.sixth].toFretString(),
      this.notes[guitarStrings.fifth].toFretString(),
      this.notes[guitarStrings.fourth].toFretString(),
      this.notes[guitarStrings.third].toFretString(),
      this.notes[guitarStrings.second].toFretString(),
      this.notes[guitarStrings.first].toFretString(),
    ].join();
  }

  toJson() {
    return {
      notes: [
        this.notes[guitarStrings.sixth].toJson(),
        this.notes[guitarStrings.fifth].toJson(),
        this.notes[guitarStrings.fourth].toJson(),
        this.notes[guitarStrings.third].toJson(),
        this.notes[guitarStrings.second].toJson(),
        this.notes[guitarStrings.first].toJson(),
      ]
    };
  }
}
