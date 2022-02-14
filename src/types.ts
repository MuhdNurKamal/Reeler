import { VideoDefinition, VideoStandard } from "./enums";
import { TimeCode } from "./TimeCode";

export type Clip = {
  id: string;
  name: string;
  description: string;
  standard: VideoStandard;
  definition: VideoDefinition;
  duration: TimeCode;
};

export type Reel = {
  id: string;
  name: string;
  description: string;
  standard: VideoStandard;
  definition: VideoDefinition;
  sequence: Clip[];
};
