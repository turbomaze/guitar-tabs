import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(100, 12);
  phrase1(tab);
  phrase2(tab);
  phrase3(tab);
  phrase1(tab);
  phrase2(tab);

  tab.quadTick(Chord.fromString('______'));
  tab.doubleTick(Chord.fromString('______'));
  tab.tick(Chord.fromString('______'));
  tab.tick(Chord.fromString('___P_W'));
  tab.tick(Chord.fromString('___R_O'));
  tab.tick(Chord.fromString('___O_R'));
  tab.tick(Chord.fromString('___G_K'));
  tab.tick(Chord.fromString('___R__'));
  tab.tick(Chord.fromString('___E_I'));
  tab.tick(Chord.fromString('___S_N'));
  tab.tick(Chord.fromString('___S__'));
  tab.tick(Chord.fromString('___.__'));
  tab.tick(Chord.fromString('___.__'));
  tab.tick(Chord.fromString('___.__'));

  return tab;
}

function phrase1(tab) {
  tab.doubleTick(Chord.fromString('3_____'));
  tab.tick(Chord.fromString('___2__'));
  tab.tick(Chord.fromString('____32'));
  tab.doubleTick(slap());
  tab.quadTick(Chord.fromString('____32'));
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
            fret: '3',
            finger: enums.fingers.unspecified,
            guitarString: enums.guitarStrings.second,
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
  tab.doubleTick(Chord.fromJson({
    notes: [{
      fret: '2',
      finger: enums.fingers.unspecified,
      guitarString: enums.guitarStrings.first,
      accent: enums.accents.halfHammer,
    }]
  }));
  tab.doubleTick(Chord.fromString('__0232'));
  tab.tick(Chord.fromString('__0___'));
  tab.tick(Chord.fromString('____30'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('____32'));
}

function phrase3(tab) {
  tab.doubleTick(Chord.fromString('____32'));
  tab.tick(slap());
  tab.doubleTick(Chord.fromString('_0____'));
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
