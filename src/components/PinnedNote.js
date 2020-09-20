import React from 'react';
import Card from './Card';

function PinnedNote({ note}) {
    return (
        <div className="">
           <h6 className="text-xs text-gray-700" >PINNED</h6>
            {note.map(n=>(<Card key={n.id} n={n}/>))}
           
            
        </div>
    )
}

export default PinnedNote
