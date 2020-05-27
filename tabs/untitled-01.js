import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(120, 2 * 6);

  const emptyMeasure = () => {
    tab.quadTick(Chord.rest());
    tab.quadTick(Chord.rest());
    tab.quadTick(Chord.rest());
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

  emptyMeasure();
  group1();
  group2();
  group1();
  group2();
  // phrase5(tab);
  // phrase5(tab);

  return tab;
}

function phrase1(tab) {
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('____32'));
}

function phrase2(tab) {
  tab.tick(Chord.fromString('____32'));
  tab.tick(
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
  tab.tick(Chord.fromJson({
    notes: [{
      fret: '3',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));
  tab.tick(Chord.fromJson({
    notes: [{
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));
  tab.tick(Chord.fromString('__0232'));
  tab.tick(Chord.fromString('__0___'));
}

function phrase3(tab) {
  tab.tick(Chord.fromString('____30'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('____32'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('_0____'));
}

function phrase4(tab) {
  tab.tick(Chord.fromString('____30'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('___23_'));
  tab.tick(Chord.fromString('___23_'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('_0____'));
}

function phrase5(tab) {
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___23_'));
  tab.tick(Chord.fromString('██__ 2'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('_____3'));
  tab.tick(Chord.fromString('3____3'));
  tab.doubleTick(Chord.fromString('_0_233'));
  tab.tick(Chord.fromString('_____3'));
  tab.tick(Chord.fromString('__0232'));
  tab.tick(Chord.fromString('____3_'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(Chord.fromString('██___2'));
  tab.tick(Chord.fromString('__0___'));
  tab.doubleTick(Chord.fromString('___232'));
  tab.doubleTick(Chord.fromString('__0__2'));
  tab.tick(Chord.fromString('_0_230'));
  tab.doubleTick(Chord.fromString('____30'));
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
