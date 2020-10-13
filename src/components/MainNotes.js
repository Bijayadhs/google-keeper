import React,{useState} from 'react';
import TakeNote from './TakeNote';
import PinnedNote from './PinnedNote';
import OthersNote from './OthersNote';
// import StateContext from '../context/stateContext'

function MainNotes() {
    const initialNote=[]
    const [note, setNote] = useState(initialNote)
    console.log(note)



    return (
    // <StateContext.Provider value={{card: state.card, dispatch}}>
            <div className="row-start-2  col-start-2 col-span-4 h-screen overflow-y-scroll px-48  py-16 flex flex-col  items-end">
                <TakeNote note={note} setNote={setNote} />
                <div className="w-full py-4">
                    <PinnedNote note={note} />
                    <OthersNote note={note} />
                </div>
            </div>
    // </StateContext.Provider>
    )
}

export default MainNotes;



//     const initialState = {
//         card:[{
//             note: 'My First Note',
//             pin: false,
//             select: false,
//             color: 'purple'
//         }]
        
//     }
//     const ourReducer = (state, action)=>{
//         switch(action.type){
//             case 'SETNOTE':
//                 return {...state, note:action.payload}
                
//             case 'PINNED':
//                 return state.card.pin = true;
                 
//             default:
//                 return state;
//     }
// }
//     const [state, dispatch] = useReducer(ourReducer,initialState)

    
    
