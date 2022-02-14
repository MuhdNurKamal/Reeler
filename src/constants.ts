import { VideoDefinition, VideoStandard } from "./enums";
import { TimeCode } from "./TimeCode";
import { Clip } from "./types";

export const DUMMY_CLIPS: Clip[] = [
  {
    id: "1",
    name: "Bud Light",
    description: "A factory is working on the new Bud Light Platinum.",
    standard: VideoStandard.PAL,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ seconds: 30, frames: 12 }, VideoStandard.PAL),
  },
  {
    id: "2",
    name: "M&M's",
    description: `At a party, a brown shelled M&M is mistaken for being naked. As a result,
    the red M&M tears off its skin and dances to "Sexy and I Know It" by LMFAO.
    `,
    standard: VideoStandard.NTSC,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ seconds: 15, frames: 27 }, VideoStandard.NTSC),
  },
  {
    id: "3",
    name: `Audi`,
    description: `A group of vampires are having a party in the woods. The vampire in charge
    of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the
    vampires, with him wondering where everyone went afterwards.`,
    standard: VideoStandard.PAL,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ minutes: 1, seconds: 30 }, VideoStandard.PAL),
  },
  {
    id: "4",
    name: "Chrysler",
    description: `Clint Eastwood recounts how the automotive industry survived the Great
    Recession.`,
    standard: VideoStandard.PAL,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ seconds: 10, frames: 14 }, VideoStandard.PAL),
  },
  {
    id: "5",
    name: "Fiat",
    description: `At a party, a brown shelled M&M is mistaken for being naked. As a result,
    the red M&M tears off its skin and dances to "Sexy and I Know It" by LMFAO.
    `,
    standard: VideoStandard.NTSC,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ seconds: 18, frames: 11 }, VideoStandard.NTSC),
  },
  {
    id: "6",
    name: "Pepsi",
    description: `People in the Middles Ages try to entertain their king (Elton John) for a
    Pepsi. While the first person fails, a mysterious person (Season 1 X Factor winner Melanie Amaro) wins the Pepsi by singing Aretha Franklin's "Respect"." After she wins,
    she overthrows the king and gives Pepsi to all the town.`,
    standard: VideoStandard.NTSC,
    definition: VideoDefinition.SD,
    duration: new TimeCode({ seconds: 20 }, VideoStandard.NTSC),
  },
  {
    id: "7",
    name: "Best Buy",
    description: `An ad featuring the creators of the camera phone, Siri, and the first text
    message. The creators of Words with Friends also appear parodying the incident
    involving Alec Baldwin playing the game on an airplane.`,
    standard: VideoStandard.PAL,
    definition: VideoDefinition.HD,
    duration: new TimeCode({ seconds: 10, frames: 5 }, VideoStandard.PAL),
  },
  {
    id: "8",
    name: "Captain America The First Avenger",
    description: `Video Promo`,
    standard: VideoStandard.PAL,
    definition: VideoDefinition.HD,
    duration: new TimeCode({ seconds: 20, frames: 10 }, VideoStandard.PAL),
  },
  {
    id: "9",
    name: "Black Beetle",
    description: ` A computer generated black beetle runs fast, as it is referencing the new
    Volkswagen model.`,
    standard: VideoStandard.NTSC,
    definition: VideoDefinition.HD,
    duration: new TimeCode({ seconds: 30 }, VideoStandard.NTSC),
  },
];
