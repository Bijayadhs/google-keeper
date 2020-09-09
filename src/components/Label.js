import React from 'react'

function Label({icon, label}) {
    return (
        <button className="flex font-semibold justify-start items-center w-full text-xs rounded-br-full rounded-tr-full p-2 hover:bg-gray-300 focus:bg-orange-200 focus:outline-none">
            <div className="px-4 text-gray-700">{icon}</div>
            <div className="text-xs">{label}</div>
        </button>
    )
}

export default Label
