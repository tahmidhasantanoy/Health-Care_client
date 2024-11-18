import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { TUserRole } from "@/types";
import SidebarItems from "./SidebarItems";
import { getToekenFromLocalStorage } from "@/services/auth.services";
import { jwtDecoder } from "@/utils/jwt";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [userRole, setUserRole] = useState("");
  const authdData = getToekenFromLocalStorage();
  const userInfo = jwtDecoder(authdData as string);

  useEffect(() => {
    const role = userInfo?.role;
    setUserRole(role as string);
  }, [userInfo]);

  console.log(userInfo);
  // const drawer = (
  //   <List>
  //     {/* All the menues comes here from somewhere */}
  //     {drawerItems("admin" as TUserRole).map((item, index) => (
  //       <ListItem key={index} disablePadding>
  //         <ListItemButton>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={item.title} />
  //         </ListItemButton>
  //       </ListItem>
  //     ))}
  //   </List>
  // );

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignContent={"center"}
        textAlign={"center"}
        spacing={2}
        sx={{
          my: 1,
          py: 1,
        }}
        component={Link}
        href={"/"}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component={"h1"}>
          Health Care
        </Typography>
      </Stack>
      {/* {drawer} */}
      <List>
        {/* All the menues comes here from somewhere */}
        {userInfo &&
          drawerItems(userRole as TUserRole).map((item, index) => (
            // {drawerItems("doctor" as TUserRole).map((item, index) => (
            // For implementing Link
            <SidebarItems key={index} item={item} />
          ))}
      </List>
    </>
  );
};

export default Sidebar;
