import { atom } from "nanostores";
import type { Content } from "@/types/content";

//author page
export const authorFilter = atom("");

//magazine page
export const magazineYearFilter = atom(null);

export const tempAuthor = atom(null);

export const latestMagazineId = atom<null | string>(null);

export const content = atom<null | Content>(null);
