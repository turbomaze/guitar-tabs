import { Tab, Chord, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(100, 4);
  tab.addChord(Chord.fromString('3_____'));
  tab.addChord(Chord.fromString('3_____'));
  tab.addChord(Chord.fromString('3_____'));
  tab.addChord(Chord.fromString('3_____'));

  return tab;
}

export const tab = main();
