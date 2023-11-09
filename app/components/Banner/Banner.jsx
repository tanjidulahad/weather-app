import { CiLocationOn } from "react-icons/ci"
import { BsWind } from "react-icons/bs"
import { BiWind } from "react-icons/bi"
import { TbDropletHalf2 } from "react-icons/tb"
import Temperature from "../TemperatureChart/TemperatureChart";


const Banner = ({country,data}) => {
    return (
        <div className="bg-[url('https://cdn.wallpapersafari.com/5/24/IvSYOt.jpg')] bg-cover bg-no-repeat bg-blend-overlay bg-black/50 text-white md:mr-4 md:h-[350px] rounded-lg mt-4 flex flex-col md:flex-row">
            <div className="flex-1 md:px-8 px-2 py-4">
                <div className="flex justify-between items-center">
                    <h3 className="flex items-center gap-2 text-xl">
                        <CiLocationOn size={24} />
                        {country}
                    </h3>
                    
                </div>
                <div className="flex justify-center items-center flex-col h-[80%] py-10 md:py-0">
                    <h2 className="text-7xl">{Math.round(data?.current?.temperature_2m)}&deg;C</h2>
                    
                </div>
                <div className="flex justify-between">
                    <h3 className="flex items-center gap-2">
                        <BsWind/>
                        {Math.round(data?.current?.surface_pressure)}hpa
                        </h3>
                    <h3 className="flex items-center gap-2">
                        <TbDropletHalf2/>
                        {data?.current?.precipitation}mm
                        </h3>
                    <h3 className="flex items-center gap-2">
                        <BiWind/>
                        {data.current.windspeed_10m}km/h
                        </h3>
                </div>
            </div>
            <div className="flex-1 justify-center items-center h-[100%] flex md:px-4 pt-10 md:pt-0">
                <div className="backdrop-blur-[3px] bg-white/30 h-[80%] p-4 rounded-lg w-full">
                    <h3 className="text-lg ml-4 tracking-wider">Temperature</h3>
                    <Temperature temp={data?.hourly?.temperature_2m}/>

                </div>
            </div>

        </div>
    );
};

export default Banner;