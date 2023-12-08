import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  username: any;
  name: string;
  id: string;
}

type State = {
  allUsers: User[];
  addUser: (user: User) => void;
};

const useAllUsers = create<State>()(
  persist(
    (set) => ({
      allUsers: [],
      addUser: (user: User) =>
        set((state) => ({
          allUsers: [...state.allUsers, user],
        })),
    }),
    {
      name: "users-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAllUsers;
