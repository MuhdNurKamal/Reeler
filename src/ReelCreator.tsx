import { ChangeEventHandler, useState } from "react";
import { VideoDefinition, VideoStandard } from "./enums";
import { useStore } from "./store";

export const ReelCreator = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [videoStandard, setVideoStandard] = useState<VideoStandard>(
    VideoStandard.PAL
  );
  const [videoDefinition, setVideoDefinition] = useState<VideoDefinition>(
    VideoDefinition.HD
  );

  const setReelInEdit = useStore((state) => state.setReelInEdit);

  const onVideoStandardChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setVideoStandard(e.target.value as VideoStandard);
  };

  const onVideoDefinitionChange: ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setVideoDefinition(e.target.value as VideoDefinition);
  };

  const onClickAdd = () => {
    setReelInEdit({
      id: "lolo",
      name,
      description,
      definition: videoDefinition,
      standard: videoStandard,
      sequence: [],
    });
  };

  return (
    <section className="flex flex-col items-center gap-2">
      <h1 className="text-xl font-bold">Create new Reel</h1>
      <input
        value={name}
        placeholder={"Name"}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={description}
        placeholder={"Description"}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex gap-4">
        <p>Video Standard</p>
        <select
          value={videoStandard}
          className="rounded"
          onChange={onVideoStandardChange}
        >
          <option value={VideoStandard.PAL}>PAL</option>
          <option value={VideoStandard.NTSC}>NTSC</option>
        </select>
      </div>
      <div className="flex gap-4">
        <p>Video Definition</p>
        <select
          value={videoDefinition}
          className="rounded"
          onChange={onVideoDefinitionChange}
        >
          <option value={VideoDefinition.HD}>HD</option>
          <option value={VideoDefinition.SD}>SD</option>
        </select>
      </div>

      <button onClick={onClickAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white hover:cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </section>
  );
};
