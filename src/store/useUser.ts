import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import UserDTO from '../dto/userDTO'

interface State extends UserDTO {
    setUser: (newState: UserDTO) => void;
    clearUser: () => void;
}

const useUser = create<State>()(
  persist(
    (set) => ({
      userId: undefined,
      name: undefined,
      login: undefined,
      accessProfileId: undefined,
      statusId: undefined,
      personId: undefined,
      updatedAt: undefined,
      updatedBy: undefined,
      setUser: (newState: UserDTO) => {
        set(newState);
      },
      clearUser: () => {
        set({
          userId: undefined,
          name: undefined,
          login: undefined,
          accessProfileId: undefined,
          statusId: undefined,
          personId: undefined,
          updatedAt: undefined,
          updatedBy: undefined,
        });
      }
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => {
        return state;
      },
    }
  )
);

export default useUser;