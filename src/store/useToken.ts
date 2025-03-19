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

const SECRET_KEY = import.meta.env.VITE_TOKEN_KEY || "";

const encryptToken = (token: string): string => {
  if (!token) return "";
  
  let encrypted = "";
  for (let i = 0; i < token.length; i++) {
    const charCode = token.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
    encrypted += String.fromCharCode(charCode);
  }
  
  return btoa(encrypted);
};

const decryptToken = (encrypted: string): string => {
  if (!encrypted) return "";
  
  try {
    const decoded = atob(encrypted);
    
    let decrypted = "";
    for (let i = 0; i < decoded.length; i++) {
      const charCode = decoded.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
      decrypted += String.fromCharCode(charCode);
    }
    
    return decrypted;
  } catch (error) {
    console.error("Erro ao descriptografar token:", error);
    return "";
  }
};

const customStorage = {
  getItem: (name: string) => {
    const value = sessionStorage.getItem(name);
    if (!value) return null;
    
    try {
      const parsed = JSON.parse(value);
      if (parsed.state && parsed.state.token) {
        parsed.state.token = parsed.state.token ? decryptToken(parsed.state.token) : null;
      }
      return JSON.stringify(parsed);
    } catch (error) {
      return null;
    }
  },
  setItem: (name: string, value: string) => {
    try {
      const parsed = JSON.parse(value);
      if (parsed.state && parsed.state.token) {
        parsed.state.token = parsed.state.token ? encryptToken(parsed.state.token) : null;
      }
      sessionStorage.setItem(name, JSON.stringify(parsed));
    } catch (error) {
      console.error("Erro ao salvar no storage:", error);
    }
  },
  removeItem: (name: string) => sessionStorage.removeItem(name)
};

const useToken = create<State>()(
  persist(
    (set) => ({
      token: null,
      hashPassword: localStorage.getItem('hashPassword'),
      setToken: (token) => {
        set({ token });
      },
      setHashPassword: (login, password) => {
        const hashPassword = btoa(`${login}:${password}`);
        localStorage.setItem('hashPassword', hashPassword);
        set({ hashPassword });
      }
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => customStorage),
      partialize: (state) => ({ 
        token: state.token
      }),
    }
  )
);

export default useToken;