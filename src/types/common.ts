import { USER_ROLE } from "@/constant/role";
import { SvgIconProps } from "@mui/material";

export type TMeta = {
  page: number;
  limit: number;
  total: number; // memorize type
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

export type TResponseObjectForSuccess = {
  data: any;
  meta: TMeta;
};

interface IError{
  path : string
  message  : number | string
}
export type TResponseObjectForError = {
  statusCode: number;
  message: string;
  errorMessage: IError[];
};
