import { NonGuest as TNonGuest } from "../api/nonGuest/NonGuest";

export const NONGUEST_TITLE_FIELD = "id";

export const NonGuestTitle = (record: TNonGuest): string => {
  return record.id?.toString() || String(record.id);
};
