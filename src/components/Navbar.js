import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import { IconButton } from '@material-ui/core';





function Navbar() {
    return (
        <div className="col-span-2 row-span-5 fixed p-2 h-12 w-full bg-white border-b border-gray-300 flex justify-between items-center">
            {/* left menu */}
            <div className="flex justify-between items-center space-x-2 text-gray-700">
                <div className="bg-gray-200 rounded-full p-1 w-10 h-10 flex items-center justify-center">
                    <MenuIcon fontSize="small" />
                </div>
                <div className="bg-orange-400 rounded w-8 h-8 text-white  flex items-center justify-center">
                    <EmojiObjectsOutlinedIcon fontSize="small" />
                </div>
                <h1 className="font-bold">Keep</h1>

            </div>
            {/* SEarch */}
            <button className="search border focus:outline-none w-1/2 h-10 my-4 px-2 rounded-md font-light text-gray-600 flex justify-between items-center bg-orange-100 focus:shadow-md focus:bg-white">
                <div>
                    <SearchIcon fontSize="small" />
                    <input type="text" className="flex-1 px-2 text-sm bg-orange-100 outline-none" placeHolder="Search" />
                </div>
                <CloseIcon fontSize="small" />

            </button>
            {/* right menu */}
            <div className="flex justify-between items-center space-x-8 text-gray-600">
                <div className="flex justify-between items-center">
                    <IconButton><RefreshIcon fontSize="small" /></IconButton>
                    <IconButton> <ViewStreamOutlinedIcon fontSize="small" /></IconButton>
                    <IconButton> <SettingsOutlinedIcon fontSize="small" /></IconButton>
                </div>

                <div className="flex justify-between items-center">
                    <IconButton>
                        <AppsOutlinedIcon fontSize="small" /> </IconButton>
                    <IconButton>
                        <AccountCircleOutlinedIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>

    )
}

export default Navbar
