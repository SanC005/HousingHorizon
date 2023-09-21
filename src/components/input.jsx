import React, { useState } from "react";
import LocationData from "../data/locations";

function Input() {
  const [data,setData] = useState(0);
      let optionItems = LocationData.map((item) =>
      <option key={item}>{item}</option>
    );
  const getData = (e) => {
    e.preventDefault();
    console.log("fetching...")
    fetch("http://127.0.0.1:5000/predict").then((res) =>
            console.log(JSON.stringify(res))
        );
  }
  return (
    <div className="flex justify-center">

    <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 text-black w-5/6 rounded-2xl m-5 text-center'>
          <div className="p-5 text-lg h-20">
            Predict the Price!
          </div>
          <div className="flex h-80">
          <div className="grid grid-cols-2 gap-2 w-1/2 mx-44">
          <div className="flex flex-col justify-center items-center gap-4">
        <div>
            <label htmlFor="location">
                Location
            </label><br/>
            <select id="location" name="location" required >
                {optionItems}
              </select>
        </div>
        <div>
            <label htmlFor="sqft">
                Square feet
            </label><br/>
            <input type="text" id="sqft" name="sqft" required value="1000"/>
        </div>
        <div>
            <label htmlFor="bhk">
                BHK
            </label><br/>
            <input type="text" id="bhk" name="bhk" required value="3"/>
        </div>
        <div>
            <label htmlFor="bath">
                Number Of Bathrooms
            </label><br/>
            <input type="text" id="bath" name="bath" required value="3"/>
        </div>
        <button type="submit" className="bg-blue-400 w-1/3" onClick={(e) => getData(e)}>Predict</button>
    </div>
          </div>
            <div className="flex w-1/2 justify-center text-center items-center">
                {data}
            </div>
          </div>

    </div>
    </div>
  )
}

export default Input