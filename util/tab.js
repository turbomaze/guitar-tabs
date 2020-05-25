import { Chord } from './chord';
import { Serializable } from './helpers';

export class Tab extends Serializable {
  /**
   * @param {number} bpm
   * @param {Chord[]} ticks
   */
  constructor(bpm, ticks) {
    super();
    this.bpm = bpm;
    this.ticks = ticks;
  }

  addChord(chord) {
    this.ticks.push(chord);
  }

  toJson() {
    return {
      bpm: this.bpm,
      ticks: this.ticks.map(tick => tick.toJson()),
    };
  }

  static fromBpm(bpm) {
    return new Tab(bpm, []);
  }

  static fromJson(json) {
    const ticks = json.ticks.map(jsonTick => Chord.fromJson(jsonTick));
    return new Tab(json.bpm, ticks);
  }
}
