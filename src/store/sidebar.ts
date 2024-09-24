import { create } from "zustand";

export interface SidebarState {
  menu: number;
  setMenu: (menu: number) => void;
}

export const useSidebar = create<SidebarState>()((set) => ({
  menu: 0,
  setMenu: (menu: number) => set({ menu }),
}));
