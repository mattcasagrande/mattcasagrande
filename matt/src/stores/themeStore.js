import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const THEME_STORAGE_KEY = 'matt-theme-store';

function noopStorage() {
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
}

function applyDomTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

const storage = createJSONStorage(() =>
  typeof window === 'undefined' ? noopStorage() : localStorage,
);

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (next) => {
        const theme = next === 'dark' ? 'dark' : 'light';
        set({ theme });
        applyDomTheme(theme);
      },
      toggleTheme: () => {
        const theme = get().theme === 'dark' ? 'light' : 'dark';
        get().setTheme(theme);
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      storage,
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state, error) => {
        if (!error && state?.theme) applyDomTheme(state.theme);
      },
    },
  ),
);
