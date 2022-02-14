import { VideoStandard } from "./enums";

export class TimeCode {
  private hours: number;
  private minutes: number;
  private seconds: number;
  private frames: number;

  constructor(
    {
      hours = 0,
      minutes = 0,
      seconds = 0,
      frames = 0,
    }: {
      hours?: number;
      minutes?: number;
      seconds?: number;
      frames?: number;
    },
    private standard: VideoStandard = VideoStandard.PAL
  ) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.frames = frames;
  }

  toString(): string {
    return `
        ${this.hours.toString().padStart(2, "0")}:${this.minutes
      .toString()
      .padStart(2, "0")}:${this.seconds
      .toString()
      .padStart(2, "0")}:${this.frames.toString().padStart(2, "0")}`;
  }

  static add(a: TimeCode, b: TimeCode): TimeCode {
    if (a.standard !== b.standard) {
      throw new Error("Cannot add TimeCodes with different standards");
    }

    const sum = new TimeCode(
      {
        hours: a.hours + b.hours,
        seconds: a.seconds + b.seconds,
        minutes: a.minutes + b.minutes,
        frames: a.frames + b.frames,
      },
      a.standard
    );

    sum.normalize();

    return sum;
  }

  private normalize() {
    let maxFrames = 0;

    if (this.standard === VideoStandard.PAL) {
      maxFrames = 25;
    } else if (this.standard === VideoStandard.NTSC) {
      maxFrames = 30;
    }

    if (this.frames >= maxFrames) {
      this.frames -= maxFrames;
      this.seconds += 1;
    }

    if (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }

    if (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
  }
}
