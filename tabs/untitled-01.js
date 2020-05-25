import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(100, 4);
  tab.addChord(Chord.fromString('3_____'));
  tab.addChord(Chord.rest());
  tab.addChord(Chord.fromString('___2__'));
  tab.addChord(Chord.fromString('____32'));
  tab.addChord(Chord.fromString('██____'));
  tab.addChord(Chord.fromString('____32'));
  tab.addChord(Chord.rest());
  tab.addChord(Chord.fromString('____32'));
  tab.addChord(Chord.fromJson({
    notes: [
      {
        fret: '3',
        finger: enums.fingers.unspecified,
        guitarString: enums.guitarStrings.second,
        accent: enums.accents.none,
      },
      {
        fret: '2',
        finger: enums.fingers.unspecified,
        guitarString: enums.guitarStrings.first,
        accent: enums.accents.hammer,
      },
    ]
  }));
  tab.addChord(Chord.fromJson({
    notes: [{
      fret: '3',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.hammer,
    }]
  }));
  tab.addChord(Chord.fromString('_____2'));

  return tab;
}

export const tab = main();
