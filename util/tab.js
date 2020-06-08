import { Chord } from './chord';
import { Serializable } from './helpers';

export class Tab extends Serializable {
  /**
   * @param {number} bpm
   * @param {number} ticksPerBar
   * @param {Chord[]} ticks
   */
  constructor(bpm, beatsPerBar, ticks) {
    super();
    this.ticksPerBeat = 4; // beat is a quarter note
    this.bpm = bpm;
    this.ticksPerBar = this.ticksPerBeat * beatsPerBar;
    this.ticks = ticks;
  }

  sixteenths(numberOfSixteenths) {
    return chord => {
      const rests = [];
      for (let i = 1; i < numberOfSixteenths; i++) {
        rests.push(Chord.rest());
      }
      this.addChords(chord, ...rests);
    };
  }

  eighthNote(chord) {
    this.sixteenths(2)(chord);
  }

  quarterNote(chord) {
    this.sixteenths(4)(chord);
  }

  halfNote(chord) {
    this.sixteenths(8)(chord);
  }

  addChords(...chords) {
    this.ticks.push(...chords);
  }

  asBars() {
    const bars = [];
    for (let i = 0; i < this.ticks.length; i++) {
      if (i % this.ticksPerBar === 0) {
        bars.push([]);
      }

      bars[bars.length - 1].push(this.ticks[i]);
    }

    for (let i = bars[bars.length - 1].length; i < this.ticksPerBar; i++) {
      bars[bars.length - 1].push(Chord.rest());
    }

    return bars;
  }

  toJson() {
    return {
      bpm: this.bpm,
      ticksPerBar: this.ticksPerBar,
      ticks: this.ticks.map(tick => tick.toJson()),
    };
  }

  static fromBpm(bpm, beatsPerBar) {
    return new Tab(bpm, beatsPerBar, []);
  }

  static fromJson(json) {
    const ticks = json.ticks.map(jsonTick => Chord.fromJson(jsonTick));
    return new Tab(json.bpm, json.ticksPerBar, ticks);
  }
}
