import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type QuoteState = {
  slugs: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  toggle: (slug: string) => void;
  clear: () => void;
};

const memory = new Map<string, string>();

const storage = createJSONStorage(() => ({
  getItem: (name: string) => {
    if (typeof window === "undefined") return memory.get(name) ?? null;
    return window.localStorage.getItem(name);
  },
  setItem: (name: string, value: string) => {
    memory.set(name, value);
    if (typeof window !== "undefined") window.localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    memory.delete(name);
    if (typeof window !== "undefined") window.localStorage.removeItem(name);
  },
}));

let quoteTouched = false;

export const useQuote = create<QuoteState>()(
  persist(
    (set, get) => ({
      slugs: [],
      add: (slug) => {
        quoteTouched = true;
        if (get().slugs.includes(slug)) return;
        set({ slugs: [...get().slugs, slug] });
      },
      remove: (slug) => {
        quoteTouched = true;
        set({ slugs: get().slugs.filter((item) => item !== slug) });
      },
      toggle: (slug) => {
        quoteTouched = true;
        if (get().slugs.includes(slug)) get().remove(slug);
        else get().add(slug);
      },
      clear: () => {
        quoteTouched = true;
        set({ slugs: [] });
      },
    }),
    {
      name: "monochrome-quote",
      storage,
      merge: (persisted, current) => {
        if (quoteTouched) return current;
        const saved = persisted as { slugs?: unknown } | undefined;
        if (saved && Array.isArray(saved.slugs) && saved.slugs.every((item) => typeof item === "string")) {
          return { ...current, slugs: saved.slugs };
        }
        return current;
      },
    },
  ),
);
