import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "id";

export const StaffTitle = (record: TStaff): string => {
  return record.id?.toString() || String(record.id);
};
