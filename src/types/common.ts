import { USER_ROLE } from "@/constant/role";
import { SvgIconProps } from "@mui/material";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

// New declaration of type
export type TUserRole = keyof typeof USER_ROLE;
/* keyof = it's bring all keys */
/* keyof = bring all types */

export type TDrawerMenus = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: React.ComponentType<SvgIconProps>;
  child?: TDrawerMenus[];
};
