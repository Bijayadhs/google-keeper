import React from 'react';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';





function TakeNote({setPinned, setData}) {
    function handleChange(e){
        e.preventDefault();
        setData(e.target.value);
    }
    function handlePinned(){
        setPinned(prev=>!prev)
    }
    return (
        <div className="text-sm font-bold border rounded-lg my-2 p-1 w-full  shadow-lg cursor-pointer flex justify-between items-center">
            <input className="p-1 bg-gray-100 focus:outline-none" type="text" placeholder="Take a note..."  onChange={handleChange}/>
            <div className="px-2 w-1/3 text-gray-600 flex justify-between">
                    <SubscriptionsOutlinedIcon onClick={handlePinned}/>
                    <CheckBoxOutlinedIcon/>
                    <BrushOutlinedIcon/>
                    <ImageOutlinedIcon/>
                
            </div>
        </div>
    )
}

export default TakeNote
