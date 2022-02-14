import { ChangeEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { DUMMY_CLIPS } from "./constants";
import { VideoDefinition, VideoStandard } from "./enums";
import { useStore } from "./store";
import { Clip } from "./types";

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="green"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const UnavailableIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="orange"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
};

export const ClipGallery = () => {
  const [videoDefinitionFilter, setVideoDefinitionFilter] = useState<
    VideoDefinition | "Any"
  >("Any");
  const [videoStandardFilter, setVideoStandardFilter] = useState<
    VideoStandard | "Any"
  >("Any");

  const addClipToReel = useStore((store) => store.addClipToReel);
  const reel = useStore((store) => store.reelInEdit);

  const onVideoDefinitionFilterChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setVideoDefinitionFilter(event.target.value as VideoDefinition);
  };

  const onVideoStandardFilterChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setVideoStandardFilter(event.target.value as VideoStandard);
  };

  const handleOnAddClipToReel = (clip: Clip) => {
    if (!reel) {
      toast.error(`Need to create a reel before clip can be added`);
    } else if (
      clip.definition === reel.definition &&
      clip.standard === reel.standard
    ) {
      addClipToReel(clip);
    } else {
      toast.error(
        `Clip is not compatible with the reel. Requires "${reel.definition} ${reel.standard}" clip but "${clip.definition} ${clip.standard}" clip was selected.`
      );
    }
  };

  return (
    <section className="p-4">
      <h1 className="text-xl text-center underline mb-2">Gallery</h1>
      <div className="flex justify-center">
        <div className="flex">
          <p>Video Definition</p>
          <select
            value={videoDefinitionFilter}
            onChange={onVideoDefinitionFilterChange}
            className="ml-2 border border-black"
          >
            <option value={"Any"}>Any</option>
            <option value={VideoDefinition.HD}>HD</option>
            <option value={VideoDefinition.SD}>SD</option>
          </select>
        </div>
        <div className="flex ml-2">
          <p>Video Standard</p>
          <select
            value={videoStandardFilter}
            onChange={onVideoStandardFilterChange}
            className="ml-2 border border-black"
          >
            <option value={"Any"}>Any</option>
            <option value={VideoStandard.PAL}>PAL</option>
            <option value={VideoStandard.NTSC}>NTSC</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {DUMMY_CLIPS.filter((clip) => {
          return (
            videoDefinitionFilter === "Any" ||
            clip.definition === videoDefinitionFilter
          );
        })
          .filter((clip) => {
            return (
              videoStandardFilter === "Any" ||
              clip.standard === videoStandardFilter
            );
          })
          .map((clip) => (
            <button
              key={clip.id}
              className="bg-black h-32"
              onClick={() => handleOnAddClipToReel(clip)}
            >
              <p className="text-white absolute">{clip.name}</p>
              <div className="flex flex-col items-center justify-center h-full">
                {reel?.definition !== clip.definition ||
                reel.standard !== clip.standard ? (
                  <UnavailableIcon />
                ) : (
                  <PlusIcon />
                )}
              </div>
            </button>
          ))}
      </div>
    </section>
  );
};
