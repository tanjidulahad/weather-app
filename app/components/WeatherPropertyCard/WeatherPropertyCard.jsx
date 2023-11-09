import { WindDirection,AirPressureIndicatior, SemiCircle, UVindicator } from "../CirculrVisual/CircularVisual";


const WeatherPropertyCard = ({title,data}) => {
    return (
        <div className="flex bg-[#ECF3F8] rounded-lg">
            <div className="p-6 flex-1">
                <h3 className="font-medium text-lg capitalize">{title}</h3>
                <p className="text-gray-500">Today {title=="wind"?"wind speed":title}</p>
                {title=="rain chance"&&<h3 className="font-medium text-lg">{data?.precipitation}mm</h3>}
                {title=="wind"&&<h3 className="font-medium text-lg">{data?.windspeed_10m}km/h</h3>}
                {title=="pressure"&&<h3 className="font-medium text-lg">{Math.round(data?.surface_pressure)}hpa</h3>}
                {title=="Temperature"&&<h3 className="font-medium text-lg">{Math.round(data?.temperature_2m)}&deg;C</h3>}
            </div>
            <div className="flex-1 justify-center items-center flex">
                {title=="rain chance"&&<SemiCircle progress={data?.precipitation}/>}
                {title=="wind"&&<WindDirection direction={data?.winddirection_10m}/>}
                {title=="pressure"&&<AirPressureIndicatior/>}
                {title=="Temperature"&&<UVindicator temp={Math.round(data?.temperature_2m)}/>}
            </div>
        </div>
    );
};

export default WeatherPropertyCard;