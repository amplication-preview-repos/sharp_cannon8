import { MenuItem as TMenuItem } from "../api/menuItem/MenuItem";

export const MENUITEM_TITLE_FIELD = "id";

export const MenuItemTitle = (record: TMenuItem): string => {
  return record.id?.toString() || String(record.id);
};
