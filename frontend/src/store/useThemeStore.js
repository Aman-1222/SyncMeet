import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("syncmeet-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("syncmeet-theme", theme);
    set({ theme });
  },
}));