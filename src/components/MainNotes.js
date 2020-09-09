import React, {useState} from 'react';
import TakeNote from './TakeNote';
import PinnedNote from './PinnedNote';
import OthersNote from './OthersNote';

function MainNotes() {
    const [pinned, setPinned] = useState(false)

    return (
        <div classname="flex flex-col items-center">
            <TakeNote setPinned={setPinned}/>
            <div>
                {pinned?<PinnedNote/>:<OthersNote/>}
            </div>
        </div>
    )
}

export default MainNotes
