import {create} from "zustand"

export type ImageState = {
  base64Images: Record<number, string>;
  setBase64Image: (index: number, base64: string) => void;
}

export const useBase64ImageStore = create<ImageState>((set) => ({
  base64Images: {},
  setBase64Image: (index, base64Image) => set((state) => ({ base64Images: { ...state.base64Images, [index]: base64Image } }))
}))
