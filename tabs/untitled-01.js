import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(120 - 0, 5);

  const abacPattern = (f, g, h) => {
    f(tab);
    g(tab);
    f(tab);
    h(tab);
  };

  abacPattern(measureA, measureB, measureC);
  abacPattern(measureA, measureB, measureC);
  abacPattern(measureD, measureE, measureF);
  abacPattern(measureG, measureH, measureH);
  abacPattern(measureI, measureE, measureF);

  return tab;
}

function measureA(tab) {
  tab.sixteenths(3)(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___2__'));

  tab.sixteenths(1)(Chord.fromString('____32'));
  tab.sixteenths(3)(slap());

  tab.quarterNote(Chord.fromString('____32'));

  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(
    Chord.fromJson(
      {
        notes: [
          {
            fret: '0',
            finger: enums.fingers.unspecified,
            guitarString: enums.guitarStrings.fifth,
            accent: enums.accents.none,
          },
          {
            fret: '2',
            finger: enums.fingers.unspecified,
            guitarString: enums.guitarStrings.first,
            accent: enums.accents.none,
          },
        ]
      }
    ),
  );

  tab.eighthNote(Chord.fromJson({
    notes: [{
      fret: '3',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.hammer,
    }]
  }));
  tab.eighthNote(Chord.fromJson({
    notes: [{
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.hammer,
    }]
  }));
}

function measureB(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('__0___'));

  tab.sixteenths(1)(Chord.fromString('____30'));
  tab.sixteenths(3)(slap());

  tab.quarterNote(Chord.fromString('____32'));

  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(slap());

  tab.quarterNote(Chord.fromString('_0____'));
}

function measureC(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('__0___'));

  tab.sixteenths(1)(Chord.fromString('____30'));
  tab.sixteenths(3)(slap());

  tab.quarterNote(Chord.fromString('___23_'));

  tab.eighthNote(Chord.fromString('___23_'));
  tab.eighthNote(slap());

  tab.quarterNote(Chord.fromString('_0____'));
}

function measureD(tab) {
  tab.eighthNote(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___2__'));
  tab.sixteenths(1)(Chord.fromString('____3_'));

  tab.sixteenths(1)(Chord.fromString('____ 2'));
  tab.sixteenths(1)(slap());
  tab.eighthNote(Chord.fromString('____32'));

  tab.sixteenths(1)(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('_____3'));

  tab.eighthNote(Chord.fromString('3____3'));

  tab.eighthNote(Chord.fromString('_0_233'));
  tab.quarterNote(Chord.fromString('_____3'));
}

function measureE(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
  tab.sixteenths(1)(Chord.fromString('____3_'));
  tab.sixteenths(1)(Chord.fromString('__0___'));

  tab.sixteenths(1)(Chord.fromString('____32'));
  tab.sixteenths(1)(slap());
  tab.sixteenths(1)(Chord.fromString('_____2'));
  tab.sixteenths(1)(Chord.fromString('__0___'));

  tab.quarterNote(Chord.fromString('___232'));

  tab.quarterNote(Chord.fromString('__0__2'));

  tab.eighthNote(Chord.fromString('_0_230'));
  tab.eighthNote(Chord.fromString('____3_'));
}

function measureF(tab) {
  tab.sixteenths(1)(Chord.fromString('__0232'));
  tab.sixteenths(1)(Chord.fromJson({
    notes: [{
      fret: '3',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));
  tab.eighthNote(Chord.fromJson({
    notes: [{
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));

  tab.eighthNote(Chord.fromString('____3_'));
  tab.eighthNote(Chord.fromString('___2__'));

  tab.sixteenths(1)(Chord.fromString('__0___'));
  tab.sixteenths(1)(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('____30'));

  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(slap());

  tab.eighthNote(Chord.fromString('___32_'));
  tab.eighthNote(Chord.fromString('_0____'));
}



function measureG(tab) {
  tab.eighthNote(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___0__'));
  tab.sixteenths(1)(Chord.fromString('____3_'));

  tab.sixteenths(1)(Chord.fromString('_____0'));
  tab.sixteenths(1)(slap());
  tab.eighthNote(Chord.fromString('____30'));

  tab.sixteenths(1)(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_____0'));

  tab.eighthNote(Chord.fromString('3____0'));
  tab.eighthNote(Chord.fromString('_0__3_'));

  tab.quarterNote(Chord.fromString('___2__'));
}

function measureH(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('__0___'));

  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(Chord.fromString('__0__2'));

  tab.eighthNote(Chord.fromJson({
    notes: [{
      fret: '3',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.hammer,
    }]
  }));
  tab.eighthNote(Chord.fromJson({
    notes: [{
      fret: '0',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.fourth,
      accent: enums.accents.none,
    }, {
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.hammer,
    }]
  }));

  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(slap());

  tab.eighthNote(Chord.fromString('___23_'));
  tab.eighthNote(Chord.fromString('_0____'));
}

function measureI(tab) {
  tab.sixteenths(3)(Chord.fromString('3__235'));
  tab.sixteenths(1)(Chord.fromString('3_____'));

  tab.sixteenths(1)(Chord.fromString('____35'));
  tab.sixteenths(1)(slap());
  tab.eighthNote(Chord.fromString('____35'));

  tab.sixteenths(1)(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('_____5'));

  tab.eighthNote(Chord.fromString('3____5'));
  tab.eighthNote(Chord.fromString('_0_233'));

  tab.quarterNote(Chord.fromString('_____3'));
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
