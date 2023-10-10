import React, { useEffect, useRef,useState } from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import Imageshow from "../viewer/Imageshow.jsx";
export default function January(props) {
    const sceneRef = useRef(null);
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(true);

    var myInc=0;
    useEffect(() => {
        const sceneEl = sceneRef.current;
        const arSystem = sceneEl.systems["mindar-image-system"];
        sceneEl.addEventListener('renderstart', () => {
            arSystem.start(); // start AR
        });
        /* let btns = document.querySelectorAll('#one');
         console.log("LENGTH:"+btns.length);
         btns.forEach(function (i) {
             i.addEventListener('click', function() {
                 console.log(btns.length);



             });
         });*/
        const incrementCount = () => {
            setCount(count + 1);
        };
        const ColorChange = () => {
            setActive(!isActive);
        };
        console.log('Count has been updated:', count);
        sceneEl.addEventListener("click", (e) => {
            /*const list = sceneEl.querySelectorAll("a-image[name]");
            for (let i = 0; i < list.length; i++) {
                //list[i].style.border = "10px solid red";
                console.log(list[i].getAttribute("name"));
            }*/
            let btns = sceneEl.querySelectorAll('a-image[name]');
            btns.forEach(function (i) {
                i.addEventListener('click', function() {
                    if(myInc==0)
                    {
                        myInc+=1;
                        let myDate = i.getAttribute("name");
                        // eslint-disable-next-line react/prop-types
                        props.myActive()
                        incrementCount()
                        if(isActive)
                            i.setAttribute('color', 'pink');
                        else
                            i.setAttribute('color', 'red');
                        //ColorChange()


                        console.log("MYDATE:" + myDate)
                        let my_color = i.getAttribute("color");
                        console.log("my_color:" + my_color)
                        arSystem.stop();
                    }

                });
                myInc=0;
            });

            console.log('Count has been updated:', count);



        });
        return () => {
            //arSystem.stop();
        }
    }, [count]);


    return (
        <div style={{ width: "100vw", height: "100vh" }} className="container">

         <a-scene ref={sceneRef} mindar-image="imageTargetSrc: ../targets3.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            {/*<a-assets>
                <img id="card" crossOrigin="anonymous" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png" />
                <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
            </a-assets>*/}
            <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: ${customFields.libVersion}; "></a-camera>

            {/*
            <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="near: 10; far: 10000;"></a-camera>
*/}
            <a-entity mindar-image-target="targetIndex: 0">
                <a-sky color="#ECECEC"></a-sky>
                <a-image  src="./UP.png" id="two" name="1-02" className="one"  color="red" opaciy="0.5" position="0.1 .1 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="2-02" className="one" color="green" opaciy="0.5" position="0.2 .1 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="3-02" className="one" color="green" opaciy="0.5" position="0.3 .1 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>

                <a-image  src="./UP.png" id="two" name="4-02" className="one" color="green" opaciy="0.5" position="-0.3 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="5-02" className="one" color="green" opaciy="0.5" position="-0.2 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="6-02" className="one" color="green" opaciy="0.5" position="-0.1 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="7-02" className="one" color="green" opaciy="0.5" position="0.0 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="8-02" className="one" color="red" opaciy="0.5" position="0.1 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="9-02" className="one" color="green" opaciy="0.5" position="0.2 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="10-02" className="one" color="green" opaciy="0.5" position="0.3 .0 0"
                          height=".1" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>

                <a-image  src="./UP.png" id="two" name="11-02" className="one" color="green" opaciy="0.5" position="-0.3 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="12-02" className="one" color="green" opaciy="0.5" position="-0.2 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="13-02" className="one" color="green" opaciy="0.5" position="-0.1 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="14-02" className="one" color="green" opaciy="0.5" position="0.0 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="15-02" className="one" color="red" opaciy="0.5" position="0.1 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="16-02" className="one" color="green" opaciy="0.5" position="0.2 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="17-02" className="one" color="green" opaciy="0.5" position="0.3 -0.095 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>


                <a-image  src="./UP.png" id="two" name="18-02" className="one" color="green" opaciy="0.5" position="-0.3 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="19-02" className="one" color="green" opaciy="0.5" position="-0.2 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="20-02" className="one" color="green" opaciy="0.5" position="-0.1 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="21-02" className="one" color="green" opaciy="0.5" position="0.0 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="22-02" className="one" color="red" opaciy="0.5" position="0.1 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="23-02" className="one" color="green" opaciy="0.5" position="0.2 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="24-02" className="one" color="green" opaciy="0.5" position="0.3 -0.185 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>


                <a-image  src="./UP.png" id="two" name="25-02" className="one" color="green" opaciy="0.5" position="-0.3 -0.275 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="26-02" className="one" color="green" opaciy="0.5" position="-0.2 -0.275 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="27-02" className="one" color="green" opaciy="0.5" position="-0.1 -0.275 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="28-02" className="one" color="green" opaciy="0.5" position="0.0 -0.275 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>
                <a-image  src="./UP.png" id="two" name="29-02" className="one" color="red" opaciy="0.5" position="0.1 -0.275 0"
                          height=".095" width=".1" rotation="0 0 0" transparent   ="true" ></a-image>

            </a-entity>

        </a-scene>
        </div>
    );
}
