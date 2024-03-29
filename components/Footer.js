import React from "react";
import Containers from "@/components/Container";
import Box from "@mui/material/Box";
import { HeaderListItem } from "@/contents";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <Box component="footer" sx={{
      background:"#1976d2",
      color:"#fff",
      padding:"20px 0"
    }}>
      <Containers maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={5}>
              <Image 
                src="./next.svg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
          </Grid>
            <Grid item xs={5}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                ページ一覧
              </Typography>
              <List>
                  {
                  HeaderListItem.map((item)=>{
                    return (
                      <ListItem key={item._id}>
                        <ListItemText>
                        <Link href={item.linl}>{item.titile}</Link>
                        </ListItemText>
                       
                      </ListItem>
                    )
                  })}
              </List>
            </Grid>
          
        </Grid>
      
      </Containers>

    </Box>
     
    </>
  );
};

export default Footer;
