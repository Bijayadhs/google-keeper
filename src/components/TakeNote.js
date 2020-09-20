import React,{useState,useEffect} from 'react';
// import StateContext from '../context/stateContext'

import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RoomIcon from '@material-ui/icons/Room';


function TakeNote({note,setNote}) {
    const [content,setContent]=useState('')
    const [newNote, setNewNote] = useState({
        id: Date.now(),
        content:content,
        isPinned:false,
        isSelect: false,
        label:'',
        color:'pink'
    })
   

    function handleSubmit(e){
        e.preventDefault();
        setContent(e.target.value)
        setNewNote({...newNote, id:Date.now(), content:content})
        setContent('')
    }

    // useEffect(()=>{
    //     setNote([...note,newNote])
    // },[note, setNote, newNote])
    
    return (
        <div className="text-sm font-bold border rounded-lg my-2 p-1 w-full  shadow-lg cursor-pointer ">
            <form className="flex justify-between items-center" onSubmit={handleSubmit}>
                <input className="p-1 bg-gray-100 focus:outline-none" type="text" name={content}  value={content} onChange={e=>setContent(e.target.value)} placeholder="Take a note..."/>
            
            <div className="px-2 w-1/3 text-gray-600 flex justify-between">
                    {note.isPinned?<RoomIcon />:<RoomOutlinedIcon />}
                    <CheckBoxOutlinedIcon/>
                    <BrushOutlinedIcon/>
                    <ImageOutlinedIcon/>
                
            </div>
            </form>
        </div>
    )
}

export default TakeNote
