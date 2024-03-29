import React from "react";
import { HeaderListItem } from "@/contents";
import Box from "@mui/material/Box";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "next/link";

const HeaderNavi = ({ active }) => {
  const url = active;
  String(url);
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <MenuList
        sx={{
          display: "flex",
        }}
      >
        {HeaderListItem.map((item) => {
          return (
            <MenuItem
              className="testList_imada"
              key={item._id}
              sx={{
                p: 0,
                marginRight: "10px",
                transition: "all .3s",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "f00",
                },
              }}
            >
              <Link
                href={item.linl}
                className={url === item.linl ? "linkActive" : "test"}
              >
                {item.titile}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
      <Button variant="contained">Login</Button>
    </Box>
  );
};

export default HeaderNavi;
