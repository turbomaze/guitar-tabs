import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(140, 4, "/untitled-02.mp3", 2.050);

  const emptyMeasure = () => {
    tab.halfNote(Chord.rest());
    tab.halfNote(Chord.rest());
  };

  const endWithC = (...measures) => {
    measures.map(measure => measure(tab));
    measureC(tab);
  };


  endWithC(measureA, measureA, measureB);
  endWithC(measureA, measureA, measureB);
  endWithC(measureD1, measureD2, measureB);
  endWithC(measureA, measureE, measureF);

  workInProgress(tab);

  return tab;
}

function measureA(tab) {
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('____0_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('_____7'));
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function measureB(tab) {
  tab.eighthNote(Chord.fromString('_5____'));
  tab.eighthNote(Chord.fromString('____0_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_5____'));
  tab.eighthNote(Chord.fromString('_____7'));
  tab.eighthNote(Chord.fromString('_5____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function measureC(tab) {
  tab.eighthNote(Chord.fromString('7_____'));
  tab.eighthNote(Chord.fromString('____7_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('7_____'));
  tab.eighthNote(Chord.fromString('_____0'));
  tab.eighthNote(Chord.fromString('7_____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____7_'));
}

function measureD1(tab) {
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('____0_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('0_____'));
  tab.eighthNote(Chord.fromString('_____7'));
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function measureD2(tab) {
  tab.eighthNote(Chord.fromString('0_____'));
  tab.eighthNote(Chord.fromString('____0_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('_____7'));
  tab.eighthNote(Chord.fromString('0_____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function measureE(tab) {
  tab.eighthNote(Chord.fromString('_7___8'));
  tab.eighthNote(
    Chord.fromJson(
      {
        notes: [
          {
            fret: '10',
            finger: enums.fingers.unspecified,
            guitarString: enums.guitarStrings.first,
            accent: enums.accents.none,
          },
          {
            fret: '0',
            finger: enums.fingers.unspecified,
            guitarString: enums.guitarStrings.second,
            accent: enums.accents.none,
          },
        ]
      }
    ),
  );
  tab.eighthNote(Chord.fromString('___0_8'));
  tab.eighthNote(Chord.fromString('0_____'));
  tab.eighthNote(Chord.fromString('_____7'));
  tab.eighthNote(Chord.fromString('_7____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function measureF(tab) {
  tab.eighthNote(Chord.fromString('_5____'));
  tab.eighthNote(Chord.fromString('____0_'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_5____'));
  tab.eighthNote(Chord.fromString('_____8'));
  tab.eighthNote(Chord.fromString('_5___7'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('____0_'));
}

function workInProgress(tab) {
  tab.eighthNote(Chord.fromString('_P____'));
  tab.eighthNote(Chord.fromString('_R____'));
  tab.eighthNote(Chord.fromString('_O___W'));
  tab.eighthNote(Chord.fromString('_G_I_O'));
  tab.eighthNote(Chord.fromString('_R_N_R'));
  tab.eighthNote(Chord.fromString('_E___K'));
  tab.eighthNote(Chord.fromString('_S____'));
  tab.eighthNote(Chord.fromString('_S____'));
}

export const tab = main();
