import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface State {
    token: string | null;
    hashPassword: string | null;
    setToken: (d: string | null) => void;
    setHashPassword: (
        login: string,
        password: string
    ) => void;
}

const useToken = create<State>()(
  persist(
    (set) => ({
      token: null,
      hashPassword: null,
      setToken: (token) => {
        set({ token });
      },
      setHashPassword: (login, password) => {
        const hashPassword = btoa(`${login}:${password}`);
        set({ hashPassword });
      }
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        token: state.token, 
        hashPassword: state.hashPassword 
      }),
    }
  )
);

export default useToken;