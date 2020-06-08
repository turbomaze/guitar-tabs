import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(120, 5);

  const emptyMeasure = () => {
    tab.halfNote(Chord.rest());
    tab.halfNote(Chord.rest());
    tab.halfNote(Chord.rest());
  };
  const group1 = () => {
    phrase1(tab);
    phrase2(tab);
    phrase3(tab);
  };
  const group2 = () => {
    phrase1(tab);
    phrase2(tab);
    phrase4(tab);
  };

  // emptyMeasure();

  group1();
  group2();

  group1();
  group2();

  // TODO fix below using sixteenths
  phrase5(tab);
  phrase6(tab);

  phrase5(tab);
  phrase7(tab);

  phrase8(tab);
  phrase8(tab);

  phrase9(tab);
  phrase10(tab);

  return tab;
}

function phrase1(tab) {
  tab.sixteenths(3)(Chord.fromString('3_____'));
  tab.sixteenths(1)(Chord.fromString('___2__'));
  tab.sixteenths(1)(Chord.fromString('____32'));
  tab.sixteenths(3)(slap());
  tab.quarterNote(Chord.fromString('____32'));
}

function phrase2(tab) {
  tab.quarterNote(Chord.fromString('____32'));
  tab.sixteenths(1)(
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
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('__0___'));
}

function phrase3(tab) {
  tab.sixteenths(1)(Chord.fromString('____30'));
  tab.sixteenths(3)(slap());
  tab.quarterNote(Chord.fromString('____32'));
  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(slap());
  tab.quarterNote(Chord.fromString('_0____'));
}

function phrase4(tab) {
  tab.sixteenths(1)(Chord.fromString('____30'));
  tab.sixteenths(3)(slap());
  tab.quarterNote(Chord.fromString('___23_'));
  tab.eighthNote(Chord.fromString('___23_'));
  tab.eighthNote(slap());
  tab.quarterNote(Chord.fromString('_0____'));
}

function phrase5(tab) {
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___23_'));
  tab.eighthNote(Chord.fromString('██__ 2'));
  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('_____3'));
  tab.eighthNote(Chord.fromString('3____3'));
  tab.quarterNote(Chord.fromString('_0_233'));
  tab.eighthNote(Chord.fromString('_____3'));
}

function phrase6(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('____3_'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(Chord.fromString('██___2'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.quarterNote(Chord.fromString('___232'));
  tab.quarterNote(Chord.fromString('__0__2'));
  tab.eighthNote(Chord.fromString('_0_230'));
  tab.quarterNote(Chord.fromString('____30'));
}

function phrase7(tab) {
  tab.eighthNote(Chord.fromString('__0232'));
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
  tab.quarterNote(Chord.fromString('____3_'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(slap());
  tab.eighthNote(Chord.fromString('___32_'));
}

function phrase8(tab) {
  tab.eighthNote(Chord.fromString('_0____'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___03_'));
  tab.eighthNote(Chord.fromString('██___0'));
  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___0__'));
  tab.eighthNote(Chord.fromString('_____0'));
  tab.eighthNote(Chord.fromString('3____0'));
  tab.quarterNote(Chord.fromString('_0__3_'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.quarterNote(Chord.fromString('__0232'));
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
  tab.quarterNote(Chord.fromString('_____2'));
  tab.quarterNote(slap());
}

function phrase9(tab) {
  tab.eighthNote(Chord.fromString('3__235'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('██__35'));
  tab.eighthNote(Chord.fromString('____35'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('_____5'));
  tab.quarterNote(Chord.fromString('3____5'));
  tab.eighthNote(Chord.fromString('_0_233'));
  tab.quarterNote(Chord.fromString('_____3'));
  tab.eighthNote(Chord.fromString('__0232'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.eighthNote(Chord.fromString('____32'));
  tab.eighthNote(slap());
  tab.eighthNote(Chord.fromString('_____2'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.eighthNote(Chord.fromString('___232'));
  tab.eighthNote(Chord.fromString('__0__2'));
  tab.eighthNote(Chord.fromString('_0_230'));
  tab.eighthNote(slap());
  tab.quarterNote(Chord.fromString('____30'));
}

function phrase10(tab) {
  tab.eighthNote(Chord.fromString('3__235'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('██__35'));
  tab.eighthNote(Chord.fromString('____35'));
  tab.eighthNote(Chord.fromString('3_____'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('_____5'));
  tab.quarterNote(Chord.fromString('3____5'));
  tab.eighthNote(Chord.fromString('_0_233'));
  tab.quarterNote(Chord.fromString('_____3'));

  tab.eighthNote(Chord.fromString('__0232'));
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
  tab.eighthNote(Chord.fromString('____3_'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('__0___'));
  tab.eighthNote(Chord.fromString('___2__'));
  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(Chord.fromString('____30'));
  tab.eighthNote(slap());
  tab.eighthNote(Chord.fromString('___23_'));
  tab.eighthNote(Chord.fromString('_0____'));
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
