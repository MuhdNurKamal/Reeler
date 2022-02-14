import { useStore } from "./store";
import { TimeCode } from "./TimeCode";

export const ReelEditor = () => {
  const reel = useStore((state) => state.reelInEdit);
  const removeFromReel = useStore((state) => state.removeFromReel);
  const handleClick = (clipIdx: number) => {
    removeFromReel(clipIdx);
  };
  return (
    <section>
      <div className="flex flex-col items-center text-l text-white mb-2">
        <p className="text-xl">Reel Info</p>
        <p>Name: {reel?.name}</p>
        <p>Description: {reel?.description}</p>
        <p>Definition: {reel?.definition}</p>
        <p>Standard: {reel?.standard}</p>
        <p>
          Duration:{" "}
          {reel?.sequence.length
            ? reel.sequence
                .map((clip) => clip.duration)
                .reduce(TimeCode.add)
                .toString()
            : new TimeCode({}).toString()}
        </p>
      </div>
      <div className="flex justify-center">
        {reel?.sequence.length ? (
          reel?.sequence.map((clip, idx) => (
            <button
              className="bg-black w-64 h-32 mx-2"
              key={idx}
              onClick={() => handleClick(idx)}
            >
              <p className="text-white absolute">{clip.name}</p>
              <div className="flex flex-col items-center justify-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </button>
          ))
        ) : (
          <p>Add a clip by clicking any clip in the Gallery below</p>
        )}
      </div>
    </section>
  );
};
