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

  addChord(chord) {
    this.ticks.push(chord);
  }

  asBars() {
    const bars = [];
    for (let i = 0; i < this.ticks.length; i++) {
      if (i % this.ticksPerBar === 0) {
        bars.push([]);
      }

      bars[bars.length - 1].push(this.ticks[i]);
    }

    if (bars[bars.length - 1].length !== this.ticksPerBar) {
      throw new Error('Bad number of ticks in the final bar');
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
