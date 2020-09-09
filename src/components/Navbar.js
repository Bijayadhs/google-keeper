import React from 'react'

function Navbar() {
    return (
        <div className="fixed p-2 h-12 w-full bg-white border-b border-gray-300 flex justify-between items-center">
            <div className="left-menu">Reminder</div>
            <div className="search">Search</div>
            <div className="right-menu">right</div>
        </div>
            
    )
}

export default Navbar
