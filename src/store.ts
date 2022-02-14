import create from "zustand";
import { Clip, Reel } from "./types";

type Store = {
  reelInEdit: Reel | null;
  setReelInEdit(reel: Reel | null): void;
  addClipToReel(clip: Clip): void;
  removeFromReel(clipIdx: number): void;
};

export const useStore = create<Store>((set) => ({
  reelInEdit: null,
  setReelInEdit: (reel: Reel | null) => set({ reelInEdit: reel }),
  addClipToReel: (clip: Clip) =>
    set((state) => {
      if (state.reelInEdit) {
        return {
          ...state,
          reelInEdit: {
            ...state.reelInEdit,
            sequence: [...state.reelInEdit.sequence, clip],
          },
        };
      }
      return state;
    }),
  removeFromReel: (clipIdx: number) =>
    set((state) => {
      if (
        state.reelInEdit &&
        clipIdx >= 0 &&
        clipIdx < state.reelInEdit.sequence.length
      ) {
        return {
          ...state,
          reelInEdit: {
            ...state.reelInEdit,
            sequence: [
              ...state.reelInEdit.sequence.slice(0, clipIdx),
              ...state.reelInEdit.sequence.slice(clipIdx + 1),
            ],
          },
        };
      }
      return state;
    }),
}));
