import React, {useState} from 'react';
import TakeNote from './TakeNote';
import PinnedNote from './PinnedNote';
import OthersNote from './OthersNote';

function MainNotes() {
    const [pinned, setPinned] = useState(false);
    const [data, setData] = useState('');
    

    return (
        <div className="mx-auto w-1/2 my-4 flex flex-col items-center">
            <TakeNote setPinned={setPinned} data={data} setData={setData}/>
            <div>
                {pinned?<PinnedNote data={data}/>:<OthersNote data={data}/>}
            </div>
        </div>
    )
}

export default MainNotes
