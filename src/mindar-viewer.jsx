// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import January from "./components/Home/January.jsx";
import axios from "axios";
// eslint-disable-next-line react/display-name,react-refresh/only-export-components
export default () => {

    const [data, setData] = useState("Click to Perform");
    const formData = new FormData();
    formData.append('Date', '28-8');
    formData.append('Language', 'tamil');
    formData.append('Latitude', '9.4533');
    formData.append('Longitude', '77.8024');
    formData.append('Timezone', '+5.30');
    formData.append('TimeOfCurrent', '13.47');
    const [isActive, setActive] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    var myInc=0;
    const ActiveChange = () => {
        setActive(!isActive);
    };
    const LocationProcess=()=>
    {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        }

        function error() {
            console.log("Unable to retrieve your location");
        }
    }
    const handleClick = async () => {
        LocationProcess()
        setIsLoading(true);



        try {
            const response = await axios.post("https://visionmaya.com/FlashCardFiles/CalendarAR2023/CalendarAR/TamilWebshow2024.php", formData);
            console.log("Post created:", response.data);

            console.log('typeof res.data', typeof response.data)
            for(let key in response.data){
                console.log(key);
                const declarationDetails = response.data[key];
                const Base64 = declarationDetails[0]["RasiChart"];
                console.log(Base64);
                //setData(Base64);
                console.log(declarationDetails)
                setIsLoading(false);
                setSuccess(true)
                //var x = document.getElementById("imgElem");
                const imagesrc="data:image/jpg;base64," + Base64;
                setData(imagesrc);
                //x.setAttribute('src', "data:image/jpg;base64," + Base64);

            }
            //const data = JSON.parse(response.data)

            console.log(data)
            //console.log("MY"+myObject["target1"]);

            //setData(response.data);

        } catch (error) {
            console.error("Error creating post:", error);
            setErr(error.message);
        }





    };
    if(myInc==0)
    {

        if(!isActive&&myInc==0)
        {
            myInc=1;
            console.log(isActive)

            //handleClick();
            return (
                <>


                    {success?<div style={{ width: "100vw", height: "100vh" }} className="container1">
                        <img src={data} alt="Snow"/>
                        <button onClick={ActiveChange}>ARCAMERA</button>
                    </div>:
                        <div>  {!isLoading&&<button name="ARCAMERA"  onClick={handleClick}>Fetch data</button>}
                            {isLoading&&<h2>"Processing"</h2>}
                                </div>
                      }

                </>


            )
        }
    }



    if(isActive)
    {
        return (
            <>

                <January myActive={ActiveChange}/>
            </>


        )
    }

}
