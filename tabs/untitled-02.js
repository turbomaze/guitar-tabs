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

  emptyMeasure();

  return tab;
}

function measureA(tab) {
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('_____7'));
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

function measureB(tab) {
  tab.sixteenths(2)(Chord.fromString('_5____'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('_5____'));
  tab.sixteenths(2)(Chord.fromString('_____7'));
  tab.sixteenths(2)(Chord.fromString('_5____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

function measureC(tab) {
  tab.sixteenths(2)(Chord.fromString('7_____'));
  tab.sixteenths(2)(Chord.fromString('____7_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('7_____'));
  tab.sixteenths(2)(Chord.fromString('_____0'));
  tab.sixteenths(2)(Chord.fromString('7_____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____7_'));
}

function measureD1(tab) {
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('0_____'));
  tab.sixteenths(2)(Chord.fromString('_____7'));
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

function measureD2(tab) {
  tab.sixteenths(2)(Chord.fromString('0_____'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('_____7'));
  tab.sixteenths(2)(Chord.fromString('0_____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

function measureE(tab) {
  tab.sixteenths(2)(Chord.fromString('_7___8'));
  tab.sixteenths(2)(
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
  tab.sixteenths(2)(Chord.fromString('___0_8'));
  tab.sixteenths(2)(Chord.fromString('0_____'));
  tab.sixteenths(2)(Chord.fromString('_____7'));
  tab.sixteenths(2)(Chord.fromString('_7____'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

function measureF(tab) {
  tab.sixteenths(2)(Chord.fromString('_5____'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('_5____'));
  tab.sixteenths(2)(Chord.fromString('_____8'));
  tab.sixteenths(2)(Chord.fromString('_5___7'));
  tab.sixteenths(2)(Chord.fromString('___0__'));
  tab.sixteenths(2)(Chord.fromString('____0_'));
}

export const tab = main();
