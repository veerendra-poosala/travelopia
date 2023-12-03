import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { menuItemType, menuItems } from './header.data';
import {v4 as uuid} from 'uuid';
import { Box, ListItemButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export interface MobileMenuInterface{
  open: boolean
  menuItems: menuItemType[]
}

const MobileMenu=(
    {
      open,
      menuItems
    }: MobileMenuInterface

) =>{
  return (
    <Box className="min-w-full md:hidden">
      {
        open && 
        <List sx={style} className="flex-col md:hidden min-w-full items-center pt-0 mt-0">
          {menuItems.map((item,index)=>{

            if(index === 0){
              return(
                <>
                  <ListItemButton className='mobile-menu-item flex items-center' key={uuid()}>
                    <ListItemText className='font-bold' primary={item.value} />
                    <KeyboardArrowDownIcon />
                  </ListItemButton>
                  <Divider />
                </>
              )
            }else{
              return(
                <>
                  <ListItemButton className='mobile-menu-item flex items-center' key={uuid()} divider>
                    <ListItemText className='font-bold' primary={item.value} />
                    <KeyboardArrowDownIcon />
                  </ListItemButton>
                </>
              )
                
            }
            
          })}   
      </List>
      
      }
    </Box>
  )
}

export default MobileMenu;