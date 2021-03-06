import React from 'react';
import Label from './Label';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


function LeftMenu() {
    const labels = [
        {
            icon: <EmojiObjectsOutlinedIcon/>,
            label: "Notes"
        },
        {
            icon: <NotificationsNoneIcon/>,
            label: "Reminders"
        },
        {
            icon: <LabelOutlinedIcon  fontSize="small"/>,
            label: "UI/UX"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "CSS"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "React"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "NodeJS"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "Flutter"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "Firebase"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "SocketIO"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "TailwindCSS"
        },
        {
            icon: <LabelOutlinedIcon/>,
            label: "Medium"
        },
        {
            icon: <EditIcon/>,
            label: "Edit Labels"
        },
        {
            icon: <ArchiveIcon/>,
            label: "Archive"
        },
        
        {
            icon: <DeleteOutlinedIcon/>,
            label: "Trash"
        }
    ]
    return (
        <div className="row-start-2 col-start-1 col-span-1 h-screen py-16  overflow-y-scroll ">
            {labels.map(l=>(
               <div key={l.label}> <Label icon={l.icon} label={l.label}/></div>
            ))}
           <a href="https://ssl.gstatic.com/keep/licenses/web_client_licenses.txt" rel="noopener noreferrer" target="_blank" className="text-xs text-right py-auto">Open-source licenses</a>
        </div>
    )
}

export default LeftMenu
