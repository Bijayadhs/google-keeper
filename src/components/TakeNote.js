import React from 'react'

function TakeNote({setPinned}) {
    return (
        <div className="border my-2 shadow-md cursor-pointer">
            Take a note<button onClick={()=>setPinned(true)}>Change Pinned</button>
        </div>
    )
}

export default TakeNote
