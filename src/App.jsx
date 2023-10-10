import { useState } from 'react'

import './App.css'
import MindARViewer from './mindar-viewer';
import Imageshow from "./components/viewer/Imageshow.jsx";
function App() {

    const [started, setStarted] = useState(null);
    /*function handleClick(e) {
        const { nodeName, textContent } = e.target;
        if (nodeName === 'BUTTON') {
            console.log("textContent"+textContent);
        }
    }*/
    return (
        <div className="App">

            <div className="control-buttons">
                    {started === null && <button onClick={() => {setStarted('aframe')}}>Start AFRAME version</button>}
{/*
                {started !== null && <button onClick={() => {setStarted(null)}}>Stop</button>}
*/}
            </div>

            {started === 'aframe' && (
                <>

                    <MindARViewer />
                    <video></video>
                </>
            )}

        </div>
    );
}


export default App
