import { create } from "zustand";

interface allMessagesState {
  allMessages: string[];
  addMessage: (message: string) => void;
}

const useAllMessages = create<allMessagesState>((set) => ({
  allMessages: [],
  addMessage: (message) =>
    set((state) => ({
      allMessages: [...state.allMessages, message],
    })),
}));

export default useAllMessages;
