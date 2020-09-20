import React,{useState} from 'react';
// import StateContext from '../context/stateContext'
import { IconButton } from '@material-ui/core';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
// import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RoomIcon from '@material-ui/icons/Room';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HistoryIcon from '@material-ui/icons/History';
import UpdateIcon from '@material-ui/icons/Update';
import CloseIcon from '@material-ui/icons/Close';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function TakeNote({note,setNote}) {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [pinned,setPinned]=useState(false)
    const [select,setSelect]=useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [color, setColor] = useState('pink')

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleColor = (color) => {
    setColor(color)
    setAnchorEl(null);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

       
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(e.target.name)
        setTitle(e.target.value)
        setContent(e.target.value)
        setNote(note=>([...note,{
            id:Date.now(),
            title: title,
            content:content,
            isPinned:pinned,
            isSelect:select,
            label:'',
            color:color
        }]))
        setContent('');
        setTitle('');
        setPinned(false)
        setSelect(false)
    }



    return (
        <div className="text-sm font-semibold border rounded-lg my-2 p-1 w-full  shadow-xl cursor-pointer ">
            <form className="px-2 space-y-2 flex flex-col justify-between" onSubmit={handleSubmit}>
                <div className="top flex justify-between items-center">
                    <input className=" p-1 flex-1 bg-gray-100 focus:outline-none" type="text" name='title'  value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title..."/>
                    
                        <IconButton  type="button" onClick={()=>setPinned((prev)=>!prev)}>{pinned?<RoomIcon />:<RoomOutlinedIcon />}</IconButton>
                    
                </div>
                <input className="p-1 text-xs placeholder-gray-500 flex-1 bg-gray-100 focus:outline-none" type="text" name='content'  value={content} onChange={e=>setContent(e.target.value)} placeholder="Take a note..."/>
                <div className="bottom w-full pb-2 flex justify-between items-center text-gray-700 font-bold">
                        <div className="space-x-2"><AddAlertIcon fontSize="small" />
                        <GroupAddIcon fontSize="small"/>
                        
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <ColorLensIcon fontSize="small"/></Button>
                            <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={()=>handleColor('orange')}>Orange</MenuItem>
                            <MenuItem onClick={()=>handleColor('red')}>Red</MenuItem>
                            <MenuItem onClick={()=>handleColor('blue')}>Blue</MenuItem>
                            <MenuItem onClick={()=>handleColor('purple')}>Purple</MenuItem>
                            </Menu>
                            
                        <MoreVertIcon fontSize="small"/>
                        <HistoryIcon fontSize="small"/>
                        <UpdateIcon fontSize="small"/>
                        <BrushOutlinedIcon fontSize="small"/>
                        <button onSubmit={handleSubmit}><ImageOutlinedIcon fontSize="small"/></button>
                        </div>
                        <div className="font-normal text-xs">Close<CloseIcon fontSize="small" className="flex-1 self-end"/></div>
                </div>
                
            {/* <button type="button" onClick={()=>setSelect((prev)=>!prev)}>
                 {select?<CheckBoxIcon/>:<CheckBoxOutlinedIcon/>}
                 </button> */}
            </form>
        </div>
    )
}

export default TakeNote
