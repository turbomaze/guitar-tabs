import { Tab, Chord, Note, enums } from '../util';

function main() {
  const tab = Tab.fromBpm(100, 8);
  tab.quadTick(Chord.fromString('3_____'));
  tab.doubleTick(Chord.fromString('___2__'));
  tab.doubleTick(Chord.fromString('____32'));
  tab.doubleTick(slap());
  tab.quadTick(Chord.fromString('____32'));
  tab.doubleTick(Chord.fromString('____32'));
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

  // tab.doubleTick(Chord.fromString('__0232'));
  // tab.tick(Chord.fromString('____30'));
  // tab.tick(slap());
  // tab.doubleTick(Chord.fromString('____32'));

  return tab;
}

function slap() {
  return Chord.fromString('██____');
}

export const tab = main();
