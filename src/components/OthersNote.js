import React from 'react';
import Card from './Card';

function OthersNote({note}) {
    return (
        <div className="">
           <h6 className="text-xs text-gray-700" >OTHERS</h6>
            {note.map(n=>(
            !n.isPinned && <Card key={n.id} n={n}/>))}
           
            
        </div>
    )
}

export default OthersNote
