import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Lang = "ar" | "en";
export type Copy = { ar: string; en: string };

export function t(lang: Lang, copy: Copy) {
  return copy[lang];
}

type I18nState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
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

let langChosen = false;

export const useI18n = create<I18nState>()(
  persist(
    (set) => ({
      lang: "ar",
      setLang: (lang) => {
        langChosen = true;
        set({ lang });
      },
    }),
    {
      name: "monochrome-lang",
      storage,
      merge: (persisted, current) => {
        if (langChosen) return current;
        const saved = persisted as { lang?: Lang } | undefined;
        if (saved?.lang === "ar" || saved?.lang === "en") return { ...current, lang: saved.lang };
        return current;
      },
    },
  ),
);
