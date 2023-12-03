import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Divider, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';

import './header.css'

import { menuItemType} from './header.data'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import MobileMenu from './mobileMenu';

export interface HeaderInterface{
    menuItems: menuItemType[]
}

const Header = (
    {menuItems}: HeaderInterface
) => {
    const path = useRouter();
    const [activeElemet, setActiveElement] = useState('')
    const [openMobileViewMenu, setOpenMobileViewMenu] = useState(false);
    
    useEffect(()=>{
        setActiveElement(path?.pathname?.slice(1)?.toLowerCase())
    },[path])

    const normalStyle:string = "flex flex-wrap m-2  menu-item w-auto text-center items-center text-md p-2";
    const activeStyle:string = `${normalStyle} menu-item-active`;
    const buttonItemsStyle:string = 'flex flex-wrap items-center md:m-2 m-1 mr-0 md:mr-2';

    return(
        <div className='w-100 flex-col p-0'>
            <div className='flex justify-between items-center py-4 mx-auto mb-0 w-100 font-sans text-sm font-semibold mt-0 pt-0'>
                <div className='flex items-center flex-grow-0 md:mb-0'>
                    <a href='#'>
                    <Image
                    className="header-logo"
                    src="https://res.cloudinary.com/v45/image/upload/v1701445444/exodusLogo_uccoja.jpg"
                    alt="logo"
                    width={120}
                    height={40}
                />
                    </a>
                
                </div>
                <div className='flex items-center justify-end flex-grow space-x-1 md:space-x-2'>
                    <ul className="hidden md:flex  items-center">
                        {menuItems.map(item=>(
                            <li key={uuid()} className={activeElemet===item.value.toLowerCase() ?  activeStyle : normalStyle}>
                                <a href={item?.path}>{item.value}</a>
                        </li>
                        ))}   
                    </ul>
                    
                    <ul className='flex'>
                        <li className={buttonItemsStyle}>
                            <Tooltip title="search">
                                <button type='button' className='flex items-center justify-center w-10 h-10 justify-self-center'>
                                    <SearchIcon />
                                </button>
                            </Tooltip>
                        </li>
                        <li className={buttonItemsStyle}>
                            <Tooltip title="My wishlist">
                                <button type='button' className='flex items-center justify-center w-10 h-10 justify-self-center'>
                                    <FavoriteBorderIcon />
                                </button>
                            </Tooltip>
                        </li>
                        <li className={`${buttonItemsStyle} menu-item-call`}>
                            <Tooltip title="call">
                                <button type='button' className='flex items-center justify-center w-auto h-10 justify-self-center'>
                                    <div className='button call-button rotate-90'>
                                        <CallIcon className='w-5 text-white rotate-180' />
                                    </div>
                                    
                                    <a className='hidden md:flex' href='#'>020 3813 6965</a>
                                </button>
                            </Tooltip>
                        </li>
                        <li className={buttonItemsStyle}>
                            <Tooltip title="contact">
                                <button type='button' className='flex items-center justify-center justify-self-center contact-button  w-24 h-10 rounded-sm text-white'>
                                    contact
                                </button>
                            </Tooltip>
                        </li>
                       
                        <li className='flex items-center ml-0 md:ml-4 md:hidden p-0'>
                            <button 
                                type='button'  
                                onClick={()=>{
                                    setOpenMobileViewMenu(prev=>!prev);
                                }} 
                                className='flex items-center justify-center w-14 h-14 justify-self-center'
                            >
                                <MenuIcon />
                            </button>
                        </li>
                    </ul>
                </div>
                

            </div>
            <Divider />
            <MobileMenu open={openMobileViewMenu} menuItems={menuItems}/>
        </div>
    )
    }
export default Header
