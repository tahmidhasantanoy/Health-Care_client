import { TDrawerMenus } from "@/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TProps = {
  item: TDrawerMenus;
};

const SidebarItems = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item?.path}`;
  const pathname = usePathname();
  // console.log(pathname);
  // console.log(linkPath);
  // console.log(pathname === linkPath);

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
        }}
      >
        <ListItemButton
          sx={{
            ...(linkPath === pathname
              ? {
                  borderRight: "3x sloid red",
                }
              : {}),
          }}
        >
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item?.title || ""} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
