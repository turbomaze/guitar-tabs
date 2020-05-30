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
}

function phrase6(tab) {
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

function phrase7(tab) {
  tab.tick(Chord.fromString('__0232'));
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
  tab.doubleTick(Chord.fromString('____3_'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(slap());
  tab.tick(Chord.fromString('___32_'));
}

function phrase8(tab) {
  tab.tick(Chord.fromString('_0____'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___03_'));
  tab.tick(Chord.fromString('██___0'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___0__'));
  tab.tick(Chord.fromString('_____0'));
  tab.tick(Chord.fromString('3____0'));
  tab.doubleTick(Chord.fromString('_0__3_'));
  tab.tick(Chord.fromString('___2__'));
  tab.doubleTick(Chord.fromString('__0232'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(Chord.fromString('__0__2'));
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
      fret: '0',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.fourth,
      accent: enums.accents.none,
    }, {
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));
  tab.doubleTick(Chord.fromString('_____2'));
  tab.doubleTick(slap());
}

function phrase9(tab) {
  tab.tick(Chord.fromString('3__235'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('██__35'));
  tab.tick(Chord.fromString('____35'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('_____5'));
  tab.doubleTick(Chord.fromString('3____5'));
  tab.tick(Chord.fromString('_0_233'));
  tab.doubleTick(Chord.fromString('_____3'));
  tab.tick(Chord.fromString('__0232'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('____32'));
  tab.tick(slap());
  tab.tick(Chord.fromString('_____2'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('___232'));
  tab.tick(Chord.fromString('__0__2'));
  tab.tick(Chord.fromString('_0_230'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('____30'));
}

function phrase10(tab) {
  tab.tick(Chord.fromString('3__235'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('██__35'));
  tab.tick(Chord.fromString('____35'));
  tab.tick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('_____5'));
  tab.doubleTick(Chord.fromString('3____5'));
  tab.tick(Chord.fromString('_0_233'));
  tab.doubleTick(Chord.fromString('_____3'));

  tab.tick(Chord.fromString('__0232'));
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
  tab.tick(Chord.fromString('____3_'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(slap());
  tab.tick(Chord.fromString('___23_'));
  tab.tick(Chord.fromString('_0____'));
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
