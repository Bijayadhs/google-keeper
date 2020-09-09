import React, {useState} from 'react';
import TakeNote from './TakeNote';
import PinnedNote from './PinnedNote';
import OthersNote from './OthersNote';

function MainNotes() {
    const [pinned, setPinned] = useState(false)

    return (
        <div>
            <TakeNote setPinned={setPinned}/>
            {pinned?<PinnedNote/>:<OthersNote/>}

            
        </div>
    )
}

export default MainNotes
