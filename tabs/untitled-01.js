import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(120, 2 * 6);
  phrase1(tab);
  phrase2(tab);
  phrase3(tab);

  phrase1(tab);
  phrase2(tab);
  phrase4(tab);

  phrase1(tab);
  phrase2(tab);
  phrase3(tab);

  // tab.tick(Chord.fromString('___P_W'));
  // tab.tick(Chord.fromString('___R_O'));
  // tab.tick(Chord.fromString('___O_R'));
  // tab.tick(Chord.fromString('___G_K'));
  // tab.tick(Chord.fromString('___R__'));
  // tab.tick(Chord.fromString('___E_I'));
  // tab.tick(Chord.fromString('___S_N'));
  // tab.tick(Chord.fromString('___S__'));

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

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
