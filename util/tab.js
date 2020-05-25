import { Chord } from './chord';
import { Serializable } from './helpers';

export class Tab extends Serializable {
  /**
   * @param {number} bpm
   * @param {number} ticksPerBar
   * @param {Chord[]} ticks
   */
  constructor(bpm, ticksPerBar, ticks) {
    super();
    this.bpm = bpm;
    this.ticksPerBar = ticksPerBar;
    this.ticks = ticks;
  }

  tick(chord) {
    this.addChords(chord);
  }

  doubleTick(chord) {
    this.addChords(chord, Chord.rest());
  }

  quadTick(chord) {
    this.addChords(chord, Chord.rest(), Chord.rest(), Chord.rest());
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

  static fromBpm(bpm, ticksPerBar) {
    return new Tab(bpm, ticksPerBar, []);
  }

  static fromJson(json) {
    const ticks = json.ticks.map(jsonTick => Chord.fromJson(jsonTick));
    return new Tab(json.bpm, json.ticksPerBar, ticks);
  }
}
