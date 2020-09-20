import React from 'react';
// import StateContext from '../context/stateContext';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RoomIcon from '@material-ui/icons/Room';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HistoryIcon from '@material-ui/icons/History';
import UpdateIcon from '@material-ui/icons/Update';
import CloseIcon from '@material-ui/icons/Close';


function Card({n}) {
    // const appState =  useContext(StateContext)
    return (
        <div className="text-gray-700 w-full h-48 my-3 rounded-lg flex flex-col justify-between border border-purple-300 bg-purple-300 rounded-lg">
            <div className="top flex justify-between items-center">
                {n.isSelect?<CheckCircleIcon/>:<CheckCircleOutlinedIcon />}
                {n.isPinned?<RoomIcon />:<RoomOutlinedIcon/>}

            </div>
            <div className="content flex-1 p-4">
                {n.content}
            </div>
            <div className="bottom w-1/2 flex justify-around items-center">
                <AddAlertIcon />
                <GroupAddIcon />
                <ColorLensIcon />
                <MoreVertIcon />
                <HistoryIcon />
                <UpdateIcon />
                <CloseIcon />


            </div>
            
        </div>
    )
}

export default Card
