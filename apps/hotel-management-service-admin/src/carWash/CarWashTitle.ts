import { CarWash as TCarWash } from "../api/carWash/CarWash";

export const CARWASH_TITLE_FIELD = "id";

export const CarWashTitle = (record: TCarWash): string => {
  return record.id?.toString() || String(record.id);
};
