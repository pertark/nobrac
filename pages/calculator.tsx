import Link from "next/link";
import { FormEvent, useState, ChangeEvent } from "react";

export default function Calculator() {
  // const [mileage, setMileage] = useState(0);
  // const [electric, setElectric] = useState(0);
  // const [gas, setGas] = useState(0);
  // const [oil,setOil] =useState(0);
  // const [smallFlights, setSmallFlights] = useState(0);
  // const [largeFlights, setLargeflights] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(0)

  const calculateCC = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setSubmitted(true);
    console.log(e)
    let carbonMileage = e.target[0].value * 0.79;
    let carbonElectric = e.target[1].value * 105;
    let carbonGas = e.target[2].value * 105;
    let carbonOil = e.target[3].value * 113;
    let carbonSmallFlights = e.target[4].value * 1100;
    let carbonLargeFlights = e.target[5].value * 4400;
    let carbonRecyclePaper = 184;
    let carbonRecycleMetal = 166;

    let totalFootprint = carbonElectric + carbonGas + carbonLargeFlights + carbonLargeFlights + carbonMileage + carbonOil + carbonSmallFlights;
    if (e.target[7].checked) {
      totalFootprint += carbonRecyclePaper;
    }
    if (e.target[9].checked) {
      totalFootprint += carbonRecycleMetal;
    }
    totalFootprint *= 0.000453592;
    setTotalCarbonFootprint(totalFootprint)
    console.log(totalFootprint + ": totalfootprint")
  }
    return ( 

    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
       <section className="text-gray-600 body-font">
      <h2 className="pt-10 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Carbon Calculator
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-p1 font-normal leading-relaxed fs521 lg:w-2/3">
        Estimate how much carbon you emit per year and how much you should
        offset.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto md:px-1 px-3">
        <div className="ktq4">
        <section className="text-white body-font">
      {!submitted?<form onSubmit={(e)=>calculateCC(e)}> 
        <label htmlFor="mileage">Yearly Car Mileage: </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="mileage" required/>
        <br /><br />
        <label htmlFor="electric">Monthly electric bill: </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="electric" required/>
        <br /><br />
        <label htmlFor="gas">Monthly gas bill: </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="gas" required/>
        <br /><br />
        <label htmlFor="oil">Monthly oil bill: </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="oil" required/>
        <br /><br />
        <label htmlFor="smallFlights">Number of flights taken in the past year (4 hours or less): </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="smallFlights" required/>
        <br /><br />
        <label htmlFor="largeFlights">Number of flights taken in the past year (over 4 hours): </label>
        <input type="number" className="border-t-0 border-r-none border-l-none ml-3 bg-transparent border-b-2" name="largeFlights" required/>
        <br /><br />
        <label htmlFor="recyclePaper">Do you recycle paper: </label><br />
        <input required type="radio" name="recyclePaper" value="yes" id="paperYes"/>
        <label htmlFor="paperYes">Yes</label><br />
        <input required type="radio" name="recyclePaper" value="no" id="paperNo"/>
        <label htmlFor="paperNo">No</label>
        <br /><br />
        <label htmlFor="recycleMetal">Do you recycle metal: </label><br />
        <input required type="radio" name="recycleMetal" value="yes" id="metalYes"/>
        <label htmlFor="metalYes">Yes</label><br />
        <input required type="radio" name="recycleMetal" value="no" id="metalNo"/>
        <label htmlFor="metalNo">No</label>
        <br /><br />
        <button className="bg-none hover:bg-white-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-white-500 rounded">Submit</button>
      </form>:<div>
        Your Total Carbon Footprint for this year is: <span className="font-bolder">{totalCarbonFootprint.toFixed(2)}</span> tonnes
        </div>}
    </section>
        </div>
      </div>
    </section>
    
    </main>
    )
}