import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAllMessages = create(
  persist(
    (set) => ({
      allMessages: [],
      addMessage: (message) =>
        set((state) => ({
          allMessages: [...state.allMessages, message],
        })),
    }),
    {
      name: "name-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAllMessages;
