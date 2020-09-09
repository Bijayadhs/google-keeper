import React from 'react'

function TakeNote({setPinned}) {
    return (
        <div className="border inline cursor-pointer">
            Take a note<button onClick={()=>setPinned(true)}>Change Pinned</button>
        </div>
    )
}

export default TakeNote
