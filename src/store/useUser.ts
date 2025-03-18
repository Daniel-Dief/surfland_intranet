import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import UserDTO from '../dto/userDTO'

interface State extends UserDTO {
    setUser: (newState: UserDTO) => void;
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
      }
    }),
    {
      name: 'user-storage', // nome único para o armazenamento
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        return state;
      },
    }
  )
);

export default useUser;